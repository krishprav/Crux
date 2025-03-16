'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  
  return (
    <Link
      href={href}
      className={cn(
        'relative px-3 py-2 text-sm font-medium transition-all',
        'text-gray-300 hover:text-white focus-visible:outline-none',
        'before:absolute before:bottom-0 before:left-0 before:h-[2px]',
        'before:w-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-400',
        'before:transition-all before:duration-300 hover:before:w-full',
        className,
        isActive ? 'text-white before:w-full' : 'before:opacity-50'
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-gradient-to-r from-blue-400/50 to-purple-400/50" />
      )}
    </Link>
  );
}
