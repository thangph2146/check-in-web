"use client";
import React, { useState, useEffect } from "react";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  NavbarButton,
} from "../ui/resizable-navbar";
import {
  ChevronDown,
  Menu,
  Code,
  Palette,
  Search,
  Brush,
  ExternalLink,
  Package,
  DollarSign,
  Users,
  Building,
  Home,
  Settings,
  User,
  LogIn,
  X,
} from "lucide-react";

interface NavigationItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
  subItems?: {
    name: string;
    link: string;
    icon?: React.ReactNode;
    external?: boolean;
  }[];
}

function NavbarContent({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    {
      name: "Services",
      link: "/services",
      icon: <Settings className="w-4 h-4" />,
      subItems: [
        {
          name: "Web Development",
          link: "/services/web-dev",
          icon: <Code className="w-4 h-4" />,
        },
        {
          name: "Interface Design",
          link: "/services/interface-design",
          icon: <Palette className="w-4 h-4" />,
        },
        {
          name: "SEO",
          link: "/services/seo",
          icon: <Search className="w-4 h-4" />,
        },
        {
          name: "Branding",
          link: "/services/branding",
          icon: <Brush className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "Products",
      link: "/products",
      icon: <Package className="w-4 h-4" />,
      subItems: [
        {
          name: "Algochurn",
          link: "https://algochurn.com",
          icon: <Code className="w-4 h-4" />,
          external: true,
        },
        {
          name: "Tailwind Master Kit",
          link: "https://tailwindmasterkit.com",
          icon: <Palette className="w-4 h-4" />,
          external: true,
        },
        {
          name: "Moonbeam",
          link: "https://gomoonbeam.com",
          icon: <Brush className="w-4 h-4" />,
          external: true,
        },
        {
          name: "Rogue",
          link: "https://userogue.com",
          icon: <Building className="w-4 h-4" />,
          external: true,
        },
      ],
    },
    {
      name: "Pricing",
      link: "/pricing",
      icon: <DollarSign className="w-4 h-4" />,
      subItems: [
        {
          name: "Hobby",
          link: "/pricing/hobby",
          icon: <Home className="w-4 h-4" />,
        },
        {
          name: "Individual",
          link: "/pricing/individual",
          icon: <User className="w-4 h-4" />,
        },
        {
          name: "Team",
          link: "/pricing/team",
          icon: <Users className="w-4 h-4" />,
        },
        {
          name: "Enterprise",
          link: "/pricing/enterprise",
          icon: <Building className="w-4 h-4" />,
        },
      ],
    },
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
        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2">
          {navigationItems.map((item, idx) => (
            <div key={`nav-item-${idx}`} className="relative">
              {item.subItems ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2 px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all duration-200 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 group">
                      <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="w-72 mt-2 p-2"
                    sideOffset={8}
                  >
                    <DropdownMenuLabel className="flex items-center space-x-2 px-2 py-1.5 text-sm font-semibold">
                      {item.icon}
                      <span>{item.name}</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="grid gap-1">
                      {item.subItems.map((subItem, subIdx) => (
                        <DropdownMenuItem
                          key={`sub-item-${subIdx}`}
                          asChild
                          className="px-3 py-2 rounded-md"
                        >
                          {subItem.external ? (
                            <a
                              href={subItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 w-full hover:bg-accent/50 rounded-md p-1 transition-colors"
                            >
                              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                                {subItem.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-medium">
                                  {subItem.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  External link
                                </span>
                              </div>
                              <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />
                            </a>
                          ) : (
                            <Link
                              href={subItem.link}
                              className="flex items-center space-x-3 w-full hover:bg-accent/50 rounded-md p-1 transition-colors"
                            >
                              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                                {subItem.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-medium">
                                  {subItem.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  Internal page
                                </span>
                              </div>
                            </Link>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.link}
                  className="flex items-center space-x-2 px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all duration-200 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105"
                  onClick={handleItemClick}
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <AnimatedThemeToggler className="p-2 rounded-lg hover:bg-accent/10 transition-colors relative z-20" />
          <NavbarButton
            href="/login"
            variant="primary"
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-md bg-white/20">
              <LogIn className="w-4 h-4" />
            </div>
            <span className="font-medium">Login</span>
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <CustomNavbarLogo />
          <div className="flex items-center space-x-2">
            <AnimatedThemeToggler className="p-2 rounded-lg hover:bg-accent/10 transition-colors relative z-20" />
            <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <DrawerTrigger asChild>
                <button className="p-2 rounded-lg hover:bg-accent/10 transition-colors lg:hidden">
                  <Menu className="w-5 h-5 text-foreground" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="h-[85vh]">
                <DrawerHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <DrawerTitle className="text-lg font-semibold">
                      Navigation Menu
                    </DrawerTitle>
                    <button
                      onClick={handleMobileMenuClose}
                      className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </DrawerHeader>
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    {navigationItems.map((item, index) => (
                      <div key={`mobile-item-${index}`} className="space-y-2">
                        {item.subItems ? (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-3 px-3 py-2 rounded-lg">
                              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                                {item.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-medium">{item.name}</span>
                                <span className="text-xs text-muted-foreground">
                                  {item.subItems.length} items
                                </span>
                              </div>
                            </div>
                            <div className="ml-6 space-y-1">
                              {item.subItems.map((subItem, subIdx) => (
                                <div
                                  key={`mobile-sub-${subIdx}`}
                                  className="px-3 py-2 rounded-md hover:bg-accent/50 transition-colors"
                                >
                                  {subItem.external ? (
                                    <a
                                      href={subItem.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center space-x-3 w-full"
                                      onClick={handleMobileMenuClose}
                                    >
                                      <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10">
                                        {subItem.icon}
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="font-medium">
                                          {subItem.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                          External link
                                        </span>
                                      </div>
                                      <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground" />
                                    </a>
                                  ) : (
                                    <Link
                                      href={subItem.link}
                                      className="flex items-center space-x-3 w-full"
                                      onClick={handleMobileMenuClose}
                                    >
                                      <div className="flex items-center justify-center w-6 h-6 rounded-md bg-primary/10">
                                        {subItem.icon}
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="font-medium">
                                          {subItem.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                          Internal page
                                        </span>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.link}
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors"
                            onClick={handleMobileMenuClose}
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                              {item.icon}
                            </div>
                            <div className="flex flex-col">
                              <span className="font-medium">{item.name}</span>
                              <span className="text-xs text-muted-foreground">
                                Direct link
                              </span>
                            </div>
                          </Link>
                        )}
                        {index < navigationItems.length - 1 && (
                          <div className="border-t border-border my-4" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border mt-6 pt-4">
                    <Link
                      href="/login"
                      className="flex items-center space-x-3 px-3 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      onClick={handleMobileMenuClose}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-white/20">
                        <LogIn className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex flex-col text-white">
                        <span className="font-medium">Login</span>
                        <span className="text-xs">Access your account</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </MobileNavHeader>
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
      <div className="fixed inset-x-0 top-0 z-40 w-full bg-background/80 backdrop-blur-sm">
        {/* Desktop placeholder */}
        <div className="relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent">
          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="flex items-center space-x-2">
            <div className="w-16 h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="w-20 h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          </div>
        </div>
        {/* Mobile placeholder */}
        <div className="fixed top-0 z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-0 lg:hidden">
          <div className="flex w-full flex-row items-center justify-between px-4 py-2">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
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
