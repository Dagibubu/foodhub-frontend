"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/data/site";
import { chatUrl } from "@/lib/whatsapp";
import { ChefHat, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CartButton } from "./CartButton";
import { WhatsAppIcon } from "./WhatsAppIcon";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-white">
            <ChefHat className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold">{siteConfig.name}</span>
            <span className="block text-xs text-muted-foreground">
              {siteConfig.nameAr}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-teal-700 ${
                pathname === item.href
                  ? "text-teal-700"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden bg-[#25D366] text-white hover:bg-[#1ebe5b] sm:inline-flex"
          >
            <a href={chatUrl()} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              Order on WhatsApp
            </a>
          </Button>
          <CartButton />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{siteConfig.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-3 text-base font-medium ${
                      pathname === item.href
                        ? "bg-teal-50 text-teal-700"
                        : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-[#25D366] text-white hover:bg-[#1ebe5b]"
                >
                  <a href={chatUrl()} target="_blank" rel="noreferrer">
                    <WhatsAppIcon className="mr-2 h-4 w-4" />
                    Order on WhatsApp
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
