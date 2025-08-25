"use client";
import React, { useState, useEffect } from "react";
import { ThemeToggle } from "../ui/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "../ui/resizable-navbar";

function NavbarContent({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Services", link: "/services" },
    { name: "Products", link: "/products" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
  ];

  const handleItemClick = () => {
    // Handle navigation item click
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Navbar className={className}>
      {/* Desktop Navigation */}
      <NavBody>
        <CustomNavbarLogo />
        <NavItems 
          items={navigationItems} 
          onItemClick={handleItemClick}
        />
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <NavbarButton href="/login" variant="primary">
            Login
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <CustomNavbarLogo />
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>
        
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block w-full px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"
              onClick={handleMobileMenuClose}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <NavbarButton 
              href="/login" 
              variant="primary" 
              className="w-full"
              onClick={handleMobileMenuClose}
            >
              Login
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

// Wrapper component để xử lý hydration
export function NavbarComponent({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render placeholder khi chưa mounted để tránh hydration mismatch
  if (!mounted) {
    return (
      <div className="sticky inset-x-0 top-0 z-40 w-full">
        <div className="relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent">
          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="flex items-center space-x-2">
            <div className="w-16 h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="w-20 h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return <NavbarContent className={className} />;
}

// Custom NavbarLogo component to use your logo
const CustomNavbarLogo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <Link
        href="/"
        className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-0 text-sm font-normal text-black dark:text-white"
      >
        <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      </Link>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-0 text-sm font-normal text-black dark:text-white"
    >
      <Image
        src={isDark ? "/logo-white.png" : "/logo.png"}
        alt="logo"
        width={100}
        height={100}
        className="w-16 h-16 object-contain"
        priority
      />
    </Link>
  );
};
