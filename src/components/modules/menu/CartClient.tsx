"use client";

import { WhatsAppIcon } from "@/components/layout/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatPrice } from "@/lib/format";
import { orderUrl } from "@/lib/whatsapp";
import { useCartStore } from "@/store/useCartStore";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function CartClient() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <ShoppingBag className="h-12 w-12 text-muted-foreground" />
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <p className="text-muted-foreground">
          Pick something tasty from the menu.
        </p>
        <Button asChild className="bg-teal-700 hover:bg-teal-800">
          <Link href="/menu">Browse the menu</Link>
        </Button>
      </div>
    );
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const setField =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSend = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone number");
      return;
    }
    window.open(orderUrl(items, form), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to send your order");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 rounded-2xl border bg-card p-3"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-muted">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex justify-between gap-2">
                <h3 className="font-semibold">{item.name}</h3>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="text-muted-foreground hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-6 text-center font-medium">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <span className="font-bold text-teal-700">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={clearCart}
          className="text-sm text-muted-foreground underline hover:text-foreground"
        >
          Clear cart
        </button>
      </div>

      <aside className="h-fit space-y-4 rounded-2xl border bg-card p-5">
        <h2 className="text-lg font-semibold">Your details</h2>
        <div className="space-y-1.5">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            value={form.name}
            onChange={setField("name")}
            placeholder="Your name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={setField("phone")}
            placeholder="+971 5X XXX XXXX"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="address">Address (optional)</Label>
          <Input
            id="address"
            value={form.address}
            onChange={setField("address")}
            placeholder="Area, building, apartment"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="notes">Notes (optional)</Label>
          <Textarea
            id="notes"
            value={form.notes}
            onChange={setField("notes")}
            placeholder="Allergies, delivery time, special requests"
            rows={3}
          />
        </div>

        <div className="flex items-center justify-between border-t pt-4 text-lg font-bold">
          <span>Total</span>
          <span className="text-teal-700">{formatPrice(total)}</span>
        </div>

        <Button
          onClick={handleSend}
          size="lg"
          className="w-full bg-[#25D366] text-white hover:bg-[#1ebe5b]"
        >
          <WhatsAppIcon className="mr-2 h-5 w-5" />
          Send order on WhatsApp
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          We&apos;ll confirm your order, delivery and payment on WhatsApp.
        </p>
      </aside>
    </div>
  );
}
