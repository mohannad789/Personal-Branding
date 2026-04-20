"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "next-themes";

const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    pos.y += sin(pos.x * 10.0 + time) * 0.1 * intensity;
    pos.x += cos(pos.y * 8.0 + time * 1.5) * 0.05 * intensity;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vec2 uv = vUv;
    
    // Create animated noise pattern
    float noise = sin(uv.x * 20.0 + time) * cos(uv.y * 15.0 + time * 0.8);
    noise += sin(uv.x * 35.0 - time * 2.0) * cos(uv.y * 25.0 + time * 1.2) * 0.5;
    
    // Mix colors based on noise and position
    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
    color = mix(color, vec3(1.0), pow(abs(noise), 2.0) * intensity);
    
    // Add glow effect
    float glow = 1.0 - length(uv - 0.5) * 2.0;
    glow = pow(glow, 2.0);
    
    gl_FragColor = vec4(color * glow, glow * 0.8);
  }
`;

function ShaderPlane({
  position,
  color1,
  color2,
  isPaused
}: {
  position: [number, number, number];
  color1: string;
  color2: string;
  isPaused: boolean;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      intensity: { value: 1.0 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    }),
    // Re-create uniforms when colors change
    [color1, color2]
  );

  useFrame((state) => {
    if (mesh.current && !isPaused) {
      uniforms.time.value = state.clock.elapsedTime;
      uniforms.intensity.value = 1.0 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <mesh ref={mesh} position={position} scale={[5, 5, 1]}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function EnergyRing({
  radius = 1,
  position = [0, 0, 0],
  color,
  isPaused
}: {
  radius?: number;
  position?: [number, number, number];
  color: string;
  isPaused: boolean;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current && !isPaused) {
      mesh.current.rotation.z = state.clock.elapsedTime * 0.2;
      (mesh.current.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <mesh ref={mesh} position={position} scale={[3, 3, 1]}>
      <ringGeometry args={[radius * 0.8, radius, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function BackgroundShaders({ isPaused = false }: { isPaused?: boolean }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = resolvedTheme === "light";

  // Extremely subtle and washed out
  const color1 = isLight ? "#ffffff" : "#0a0a0a";
  const color2 = isLight ? "#f0f0f0" : "#1a1a1a";
  const ringColor = isLight ? "#e5e5e5" : "#222222";
  const bgColor = isLight ? "#ffffff" : "#000000";

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0, backgroundColor: bgColor, zIndex: -1 }}>
      {/* We only render Canvas when phase is ready, managed by AnimatedHeroIntro, but we stop the loop when paused */}
      <Canvas camera={{ position: [0, 0, 3] }} gl={{ alpha: true, antialias: true }} frameloop={isPaused ? "never" : "always"}>
        <ambientLight intensity={0.5} />
        <ShaderPlane position={[0, 0, 0]} color1={color1} color2={color2} isPaused={isPaused} />
        <EnergyRing radius={1.5} position={[0, 0, 0.1]} color={ringColor} isPaused={isPaused} />
        <EnergyRing radius={2.2} position={[0, 0, 0.2]} color={ringColor} isPaused={isPaused} />
      </Canvas>
    </div>
  );
}
