"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CartButton() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button variant="ghost" size="icon" className="relative" asChild>
      <Link href="/cart" aria-label="Open cart">
        <ShoppingBag className="h-5 w-5" />
        {mounted && totalItems > 0 && (
          <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-teal-700 px-1 text-xs font-bold text-white">
            {totalItems}
          </span>
        )}
      </Link>
    </Button>
  );
}
