"use client";
import React from "react";
import { motion } from "framer-motion";



const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 pt-2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-lg"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-3"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-slate-200 dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-between space-x-4 px-8 py-0 "
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
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ 
  children, 
  ...rest 
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};

export const NavbarMenu = () => {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <div className="flex items-center justify-between">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Tính năng">
          <div className="text-sm grid grid-cols-2 gap-10 p-4 w-[400px]">
            <div>
              <h3 className="font-bold text-black dark:text-white mb-2">Quản lý</h3>
              <div className="space-y-2">
                <HoveredLink href="/dashboard">Dashboard</HoveredLink>
                <HoveredLink href="/users">Người dùng</HoveredLink>
                <HoveredLink href="/reports">Báo cáo</HoveredLink>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-black dark:text-white mb-2">Hệ thống</h3>
              <div className="space-y-2">
                <HoveredLink href="/settings">Cài đặt</HoveredLink>
                <HoveredLink href="/help">Trợ giúp</HoveredLink>
              </div>
            </div>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Tài khoản">
          <div className="text-sm p-4 w-[200px]">
            <div className="space-y-2">
              <HoveredLink href="/profile">Hồ sơ</HoveredLink>
              <HoveredLink href="/logout">Đăng xuất</HoveredLink>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};
