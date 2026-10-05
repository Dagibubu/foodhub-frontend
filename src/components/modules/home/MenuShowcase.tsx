"use client";

import { menuCategories, menuItems } from "@/data/menu";
import { formatPrice } from "@/lib/format";
import { dishUrl } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const tabs = ["All", ...menuCategories] as const;

export function MenuShowcase() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const items = menuItems.filter(
    (item) => active === "All" || item.category === active,
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === tab
                ? "bg-[#f2402f] text-white shadow-lg shadow-red-500/30"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <a
            key={item.id}
            href={dishUrl(item.name)}
            target="_blank"
            rel="noreferrer"
            className={`group relative block aspect-4/5 overflow-hidden rounded-3xl shadow-sm transition hover:shadow-2xl ${
              i === 0 ? "bg-[#c9e8ee]" : "bg-slate-100"
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-2xl bg-white/95 p-3 shadow-lg backdrop-blur">
              <div>
                <h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900">{item.name}</h3>
                <p className="text-sm font-semibold text-[#3d9fb0]">
                  {formatPrice(item.price)}
                </p>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f2402f] text-white transition group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
