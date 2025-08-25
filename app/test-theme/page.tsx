"use client";

import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

export default function TestThemePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Test AnimatedThemeToggler</h1>
        <p className="text-muted-foreground">Click the button below to test theme switching</p>
        <div className="flex justify-center">
          <AnimatedThemeToggler className="p-4 rounded-lg hover:bg-accent/10 transition-colors border border-border" />
        </div>
      </div>
    </div>
  );
}
