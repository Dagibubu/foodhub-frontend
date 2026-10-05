"use client";

import { WhatsAppIcon } from "@/components/layout/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import type { MenuItem } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import { dishUrl } from "@/lib/whatsapp";
import { useCartStore } from "@/store/useCartStore";
import { Plus } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export function MenuCard({ item }: { item: MenuItem }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    toast.success(`${item.name} added to cart`);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition duration-500 group-hover:scale-110 ${
            item.available ? "" : "grayscale"
          }`}
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-[#0f2a43] shadow">
          {formatPrice(item.price)}
        </span>
        <span className="absolute bottom-3 left-3 rounded-full bg-[#3d9fb0]/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {item.category}
        </span>
        {!item.available && (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
            Sold out
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-bold text-[#0f2a43] leading-snug">
          {item.name}
        </h3>
        {item.nameAr && (
          <p dir="rtl" className="text-sm text-muted-foreground">
            {item.nameAr}
          </p>
        )}
        <p className="text-sm text-muted-foreground">{item.description}</p>

        <div className="mt-auto flex gap-2 pt-3">
          <Button
            onClick={handleAdd}
            disabled={!item.available}
            className="flex-1 rounded-full bg-[#f2402f] hover:bg-[#d93424]"
          >
            <Plus className="mr-1 h-4 w-4" />
            Add to cart
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="rounded-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
          >
            <a
              href={dishUrl(item.name)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Order ${item.name} on WhatsApp`}
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
