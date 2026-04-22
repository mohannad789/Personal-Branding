"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

interface ShaderAnimationProps {
  isPaused?: boolean;
}

export default function ShaderAnimation({ isPaused = false }: ShaderAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>(0);
  const isRunningRef = useRef<boolean>(false);
  const uniformsRef = useRef<Record<string, { value: any }> | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Reactively update background color when theme changes — no WebGL recreation needed
  useEffect(() => {
    if (!uniformsRef.current || !mounted) return;
    const isLight = resolvedTheme === "light";
    const bgVal = isLight ? 1.0 : 0.039;
    uniformsRef.current.bgColor.value.set(bgVal, bgVal, bgVal);
  }, [resolvedTheme, mounted]);

  // Control animation loop without recreating WebGL context
  useEffect(() => {
    isRunningRef.current = !isPaused;
  }, [isPaused]);

  // One-time WebGL setup
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Original colorful shader — only background changes per theme
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform vec3 bgColor;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.05;
        float lineWidth = 0.002;

        vec3 color = bgColor;
        for(int j = 0; j < 3; j++){
          for(int i = 0; i < 5; i++){
            color[j] += lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
          }
        }

        gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
      }
    `;

    const camera = new THREE.Camera();
    camera.position.z = 1;
    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const isLight = resolvedTheme === "light";
    const bgVal = isLight ? 1.0 : 0.039;

    const uniforms: Record<string, { value: any }> = {
      time:       { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
      bgColor:    { value: new THREE.Vector3(bgVal, bgVal, bgVal) },
    };
    uniformsRef.current = uniforms;

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.resolution.value.x = renderer.domElement.width;
      uniforms.resolution.value.y = renderer.domElement.height;
    };
    onResize();
    window.addEventListener("resize", onResize, false);

    isRunningRef.current = !isPaused;

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      if (isRunningRef.current) {
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);
      }
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationIdRef.current);
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Intentionally runs once — theme/pause handled by other effects

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
