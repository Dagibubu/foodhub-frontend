import { MenuBrowser } from "@/components/modules/menu/MenuBrowser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Sanfoura Kitchen",
  description: "Browse our homemade dishes and order on WhatsApp.",
};

export default function MenuPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold md:text-4xl">Our Menu</h1>
        <p className="mt-2 text-muted-foreground">
          Everything is cooked fresh at home. Add dishes to your cart and send
          your order to us on WhatsApp.
        </p>
      </div>
      <MenuBrowser />
    </section>
  );
}
