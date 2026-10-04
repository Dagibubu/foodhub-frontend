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
    <article className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover ${item.available ? "" : "grayscale"}`}
        />
        {!item.available && (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
            Sold out
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug">{item.name}</h3>
          <span className="shrink-0 font-bold text-teal-700">
            {formatPrice(item.price)}
          </span>
        </div>
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
            className="flex-1 bg-teal-700 hover:bg-teal-800"
          >
            <Plus className="mr-1 h-4 w-4" />
            Add to cart
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
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
