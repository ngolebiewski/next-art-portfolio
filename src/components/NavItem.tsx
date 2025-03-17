// src/components/NavItem.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`block p-2 rounded hover:bg-gray-100 transition-colors duration-200 ${
        pathname === href ? "bg-blue-100 text-blue-800" : ""
      }`}
    >
      {label}
    </Link>
  );
};

export default NavItem;