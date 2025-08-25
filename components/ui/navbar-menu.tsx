"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon } from "lucide-react";
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger 
} from "./drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";



// Mobile Menu Item Component
const MobileMenuItem = ({ item, children }: { item: string; children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 px-4 flex items-center justify-between text-foreground hover:bg-accent/10 rounded-lg transition-colors p-2"
      >
        <span className="font-medium">{item}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 space-y-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Desktop Menu Item Component
const DesktopMenuItem = ({ item, children }: { item: string; children?: React.ReactNode }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer text-foreground hover:opacity-[0.9] whitespace-nowrap bg-transparent border-none p-0 text-sm font-medium">
          {item}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="center" 
        className="w-auto min-w-[200px] p-2"
        sideOffset={8}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const MenuItem = ({
  item,
  children,
  isMobile = false,
}: {
  item: string;
  children?: React.ReactNode;
  isMobile?: boolean;
}) => {
  if (isMobile) {
    return <MobileMenuItem item={item}>{children}</MobileMenuItem>;
  }

  return <DesktopMenuItem item={item}>{children}</DesktopMenuItem>;
};

export const Menu = ({
  children,
  isMobile = false,
}: {
  children: React.ReactNode;
  isMobile?: boolean;
}) => {
  if (isMobile) {
    return (
      <div className="w-full">
        {children}
      </div>
    );
  }

  return (
    <nav
      className="relative rounded-full border border-border bg-card shadow-input flex justify-between items-center space-x-4 px-4 md:px-6 lg:px-8 py-2"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-3 p-3 rounded-lg hover:bg-accent/10 transition-colors">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-lg w-20 h-10 md:w-28 md:h-14 object-cover"
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm md:text-base font-bold mb-1 text-foreground line-clamp-1">
          {title}
        </h4>
        <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ 
  children, 
  className = "",
  ...rest 
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...rest}
      className={`text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-accent/10 block ${className}`}
    >
      {children}
    </a>
  );
};

// Mobile Menu Component using Drawer
export const MobileMenu = ({ 
  children 
}: { 
  children: React.ReactNode; 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button className="p-2 rounded-lg hover:bg-accent/10 transition-colors lg:hidden">
          <MenuIcon className="w-5 h-5 text-foreground" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader>
          <DrawerTitle className="text-center">Menu</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4 overflow-y-auto flex-1">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

// Responsive Navbar Menu
export const NavbarMenu = () => {
  const menuItems = [
    {
      item: "Tính năng",
      children: (
        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-2 md:p-4 w-full md:w-[400px]">
          <div>
            <h3 className="font-bold text-foreground mb-2">Quản lý</h3>
            <div className="space-y-1">
              <HoveredLink href="/dashboard">Dashboard</HoveredLink>
              <HoveredLink href="/users">Người dùng</HoveredLink>
              <HoveredLink href="/reports">Báo cáo</HoveredLink>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-2">Hệ thống</h3>
            <div className="space-y-1">
              <HoveredLink href="/settings">Cài đặt</HoveredLink>
              <HoveredLink href="/help">Trợ giúp</HoveredLink>
            </div>
          </div>
        </div>
      )
    },
    {
      item: "Tài khoản",
      children: (
        <div className="text-sm p-2 md:p-4 w-full md:w-[200px]">
          <div className="space-y-1">
            <HoveredLink href="/profile">Hồ sơ</HoveredLink>
            <HoveredLink href="/logout">Đăng xuất</HoveredLink>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-between">
        <Menu>
          {menuItems.map((menuItem) => (
            <MenuItem 
              key={menuItem.item}
              item={menuItem.item}
            >
              {menuItem.children}
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* Tablet Menu (Simplified) */}
      <div className="hidden md:flex lg:hidden items-center justify-between">
        <Menu>
          {menuItems.map((menuItem) => (
            <MenuItem 
              key={menuItem.item}
              item={menuItem.item}
            >
              {menuItem.children}
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* Mobile Menu using Drawer */}
      <MobileMenu>
        <Menu isMobile>
          {menuItems.map((menuItem) => (
            <MenuItem 
              key={menuItem.item}
              item={menuItem.item}
              isMobile
            >
              {menuItem.children}
            </MenuItem>
          ))}
        </Menu>
      </MobileMenu>
    </>
  );
};
