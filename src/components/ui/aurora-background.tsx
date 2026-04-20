"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const AuroraBackground = ({
  className,
  children,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex h-[100vh] flex-col items-center justify-center bg-[var(--bg-color)] text-[var(--text-color)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </main>
  );
};
