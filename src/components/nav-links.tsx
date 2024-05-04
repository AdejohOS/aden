"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  icon: LucideIcon;
  label: string | undefined;
  href: string;
}

const NavLinks = ({ label, href, icon: Icon, ...restProps }: NavLinksProps) => {
  const pathName = usePathname();

  const isActive =
    (pathName === "/" && href === "/") ||
    pathName === href ||
    pathName?.startsWith(`${href}/`);

  return (
    <Link
      className={cn(
        `md:w-auto pl-6 md:p-0 w-full font-semibold
              text-slate-500 hover:text-green-700 transition-all  hover:bg-green-100/20`,
        isActive && `bg-green-200/20 text-green-700 md:bg-slate-50 md:border-b`
      )}
      href={href}
      {...restProps}
    >
      <p className="py-4">{label}</p>
    </Link>
  );
};

export default NavLinks;
