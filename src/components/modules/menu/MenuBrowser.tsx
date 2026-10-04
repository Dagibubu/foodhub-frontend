"use client";

import { Input } from "@/components/ui/input";
import { menuCategories, menuItems } from "@/data/menu";
import { Search } from "lucide-react";
import { useState } from "react";
import { MenuCard } from "./MenuCard";

export function MenuBrowser() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = menuItems.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      (!q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)),
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {["All", ...menuCategories].map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCategory(name)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === name
                  ? "border-teal-700 bg-teal-700 text-white"
                  : "bg-background hover:border-teal-700"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the menu"
            className="pl-9"
          />
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">
          No dishes found. Try a different search or category.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
