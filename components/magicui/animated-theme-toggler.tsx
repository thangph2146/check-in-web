"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = async () => {
    console.log("AnimatedThemeToggler clicked!", { mounted, resolvedTheme });
    
    if (!buttonRef.current || !mounted) {
      console.log("Button not ready:", { buttonRef: !!buttonRef.current, mounted });
      return;
    }

    // Logic tương tự như theme-toggle.tsx
    // Xử lý trường hợp resolvedTheme có thể là undefined (system theme)
    const currentTheme = resolvedTheme || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    console.log("Changing theme:", { currentTheme, newTheme });

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className={cn(className)}>
        <div className="w-5 h-5 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      </button>
    );
  }

  // Logic hiển thị icon tương tự theme-toggle.tsx
  // Xử lý trường hợp resolvedTheme có thể là undefined (system theme)
  const isDark = resolvedTheme === "dark";

  return (
    <button 
      ref={buttonRef} 
      onClick={changeTheme} 
      className={cn(
        "relative z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2",
        className
      )}
      aria-label={isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
      type="button"
    >
      {isDark ? <SunDim className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};
