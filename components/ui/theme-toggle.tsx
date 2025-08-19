"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface ThemeToggleProps {
  className?: string
}

// Wrapper component để xử lý hydration
function ThemeToggleContent({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Tránh hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Render placeholder khi chưa mounted để tránh hydration mismatch
  if (!mounted) {
    return (
      <div 
        className={cn(
          "flex w-16 h-8 p-1 rounded-full",
          "bg-muted border border-border",
          className
        )}
        suppressHydrationWarning
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center w-6 h-6 rounded-full bg-muted-foreground/20" />
          <div className="flex justify-center items-center w-6 h-6 rounded-full" />
        </div>
      </div>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        "bg-background border border-border hover:bg-accent/10 hover:border-accent/30",
        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      role="button"
      tabIndex={0}
      aria-label={isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setTheme(isDark ? "light" : "dark")
        }
      }}
      suppressHydrationWarning
    >
      <div className="flex justify-between items-center w-full relative">
        {/* Active indicator */}
        <div
          className={cn(
            "absolute w-6 h-6 rounded-full transition-all duration-300 ease-out",
            "bg-gradient-to-br from-primary to-primary/80 shadow-sm",
            isDark 
              ? "transform translate-x-0" 
              : "transform translate-x-7.5"
          )}
        />
        
        {/* Moon icon (Dark mode) */}
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-all duration-300 relative z-10",
            isDark 
              ? "text-white" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Moon 
            className={cn(
              "w-4 h-4 transition-all duration-300",
              isDark ? "scale-110" : "scale-100"
            )}
            strokeWidth={isDark ? 2 : 1.5}
          />
        </div>
        
        {/* Sun icon (Light mode) */}
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-all duration-300 relative z-10",
            isDark 
              ? "text-muted-foreground hover:text-foreground" 
              : "text-primary-foreground"
          )}
        >
          <Sun 
            className={cn(
              "w-4 h-4 transition-all duration-300",
              !isDark ? "scale-110" : "scale-100"
            )}
            strokeWidth={!isDark ? 2 : 1.5}
          />
        </div>
      </div>
    </div>
  )
}

// Export wrapper component
export function ThemeToggle(props: ThemeToggleProps) {
  return (
    <div suppressHydrationWarning>
      <ThemeToggleContent {...props} />
    </div>
  )
}