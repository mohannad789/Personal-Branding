import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Branding | Premium Position",
  description: "Minimalistic, highly animated personal branding website.",
};

import AnimatedHeader from "@/components/AnimatedHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedHeader>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-color)' }}>
              PB.
            </div>
            <ThemeToggle />
          </AnimatedHeader>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
