"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem, NavbarMenu } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ui/theme-toggle";
import Image from "next/image";
import { useTheme } from "next-themes";
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger 
} from "../ui/drawer";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDark = resolvedTheme === "dark"

  const navigationItems = [
    {
      item: "Services",
      children: (
        <div className="flex flex-col space-y-2">
          <HoveredLink href="/web-dev">Web Development</HoveredLink>
          <HoveredLink href="/interface-design">Interface Design</HoveredLink>
          <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
          <HoveredLink href="/branding">Branding</HoveredLink>
        </div>
      )
    },
    {
      item: "Products",
      children: (
        <div className="text-sm grid grid-cols-2 gap-4 p-2 w-[500px]">
          <ProductItem
            title="Algochurn"
            href="https://algochurn.com"
            src="https://assets.aceternity.com/demos/algochurn.webp"
            description="Prepare for tech interviews like never before."
          />
          <ProductItem
            title="Tailwind Master Kit"
            href="https://tailwindmasterkit.com"
            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
            description="Production ready Tailwind css components for your next project"
          />
          <ProductItem
            title="Moonbeam"
            href="https://gomoonbeam.com"
            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
            description="Never write from scratch again. Go from idea to blog in minutes."
          />
          <ProductItem
            title="Rogue"
            href="https://userogue.com"
            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
          />
        </div>
      )
    },
    {
      item: "Pricing",
      children: (
        <div className="flex flex-col space-y-2">
          <HoveredLink href="/hobby">Hobby</HoveredLink>
          <HoveredLink href="/individual">Individual</HoveredLink>
          <HoveredLink href="/team">Team</HoveredLink>
          <HoveredLink href="/enterprise">Enterprise</HoveredLink>
        </div>
      )
    }
  ];

  return (
    <div
      className={cn("sticky w-full top-4 inset-x-0 max-w-7xl mx-auto z-50 px-4", className)}
    >
      <div className="relative rounded-full border border-border bg-card/80 backdrop-blur-sm shadow-lg flex items-center justify-between px-4 md:px-6 lg:px-8 py-0">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="w-16 h-16 flex items-center justify-center">
            <Image
              src={isDark ? "/logo-white.png" : "/logo.png"}
              alt="logo"
              width={400}
              height={400}
              className="w-16 h-16 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((navItem) => (
            <MenuItem 
              key={navItem.item}
              item={navItem.item}
            >
              {navItem.children}
            </MenuItem>
          ))}
        </div>

        {/* Tablet Navigation (Simplified) */}
        <div className="hidden md:flex lg:hidden items-center space-x-4">
          {navigationItems.slice(0, 2).map((navItem) => (
            <MenuItem 
              key={navItem.item}
              item={navItem.item}
            >
              {navItem.item === "Products" ? (
                <div className="text-sm p-2 w-[300px]">
                  <div className="space-y-3">
                    <ProductItem
                      title="Algochurn"
                      href="https://algochurn.com"
                      src="https://assets.aceternity.com/demos/algochurn.webp"
                      description="Prepare for tech interviews like never before."
                    />
                    <ProductItem
                      title="Tailwind Master Kit"
                      href="https://tailwindmasterkit.com"
                      src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                      description="Production ready Tailwind css components for your next project"
                    />
                  </div>
                </div>
              ) : (
                navItem.children
              )}
            </MenuItem>
          ))}
        </div>

        {/* Right side - Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          {/* Mobile Menu using Drawer */}
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <button className="p-2 rounded-lg hover:bg-accent/10 transition-colors lg:hidden">
                <MenuIcon className="w-5 h-5 text-foreground" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-[85vh]">
              <DrawerHeader>
                <DrawerTitle className="text-center">Navigation</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 pb-4 overflow-y-auto flex-1 space-y-4">
                {navigationItems.map((navItem) => (
                  <div key={navItem.item} className="space-y-2">
                    <h3 className="font-semibold text-foreground text-lg border-b border-border pb-2">
                      {navItem.item}
                    </h3>
                    <div className="pl-4 space-y-1">
                      {navItem.item === "Services" && (
                        <>
                          <HoveredLink href="/web-dev">Web Development</HoveredLink>
                          <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                          <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                          <HoveredLink href="/branding">Branding</HoveredLink>
                        </>
                      )}
                      {navItem.item === "Products" && (
                        <div className="space-y-3">
                          <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                          />
                          <ProductItem
                            title="Tailwind Master Kit"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production ready Tailwind css components for your next project"
                          />
                        </div>
                      )}
                      {navItem.item === "Pricing" && (
                        <>
                          <HoveredLink href="/hobby">Hobby</HoveredLink>
                          <HoveredLink href="/individual">Individual</HoveredLink>
                          <HoveredLink href="/team">Team</HoveredLink>
                          <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
