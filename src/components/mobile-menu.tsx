"use client";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "./logo";
import { Separator } from "./ui/separator";
import NavItems from "./nav-items";

const MobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="md:hidden align-middle hover:opacity-75">
          <Menu />
        </SheetTrigger>

        <SheetContent side={"right"} className="p-0 bg-white">
          <SheetClose asChild>
            <NavItems />
          </SheetClose>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
