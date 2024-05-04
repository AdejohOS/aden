"use client";

import {
  Layout,
  PhoneCallIcon,
  Video,
  User2Icon,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import NavLinks from "./nav-links";

const linkRoutes = [
  {
    icon: User2Icon,
    label: "Home",
    href: "/",
  },
  {
    icon: User2Icon,
    label: "About Us",
    href: "/about",
  },
  {
    icon: Video,
    label: "Media",
    href: "/media",
  },
  {
    icon: Calendar,
    label: "Events",
    href: "/upcoming-events",
  },
  {
    icon: PhoneCallIcon,
    label: "Contact Us",
    href: "/contact-us",
  },
];

const NavItems = ({ ...restProps }) => {
  return (
    <ul className="flex flex-col md:flex-row items-start md:flex-between mt-12  md:mt-0 w-full md:gap-4">
      {linkRoutes.map((link) => (
        <NavLinks
          key={link.label}
          label={link.label}
          href={link.href}
          icon={link.icon}
          {...restProps}
        />
      ))}
    </ul>
  );
};

export default NavItems;
