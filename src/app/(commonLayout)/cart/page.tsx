import { CartClient } from "@/components/modules/menu/CartClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Cart | Sanfoura Kitchen",
};

export default function CartPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Your Cart</h1>
      <CartClient />
    </section>
  );
}
