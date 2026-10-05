import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Menu - Sanfoura Kitchen",
  description: "Homemade dishes from Sanfoura Kitchen.",
};

const menuItems = [
  {
    name: "Burger",
    description: "Sesame bun, juicy patty, fresh lettuce, tomato and cheese.",
    image: "/menu/burger.jpg",
  },
  {
    name: "Ethiopian Platter",
    description: "Injera with lentils, vegetables, beetroot and fresh salad.",
    image: "/menu/ethiopian-platter.jpg",
  },
  {
    name: "Chocolate Ice Cream Cake",
    description: "Layered ice cream cake with cocoa and chocolate chips.",
    image: "/menu/chocolate-ice-cream-cake.jpg",
  },
  {
    name: "Chicken Puff",
    description: "Puff stuffed with chicken, vegetables and mozzarella cheese.",
    image: "/menu/chicken-puff.jpg",
  },
];

export default function MenuPage() {
  return (
    <section className="section-container py-16">
      <div className="mb-12 flex flex-col items-center text-center gap-4">
        <Image
          src="/logo-sm.png"
          alt="Sanfoura Kitchen"
          width={160}
          height={148}
          priority
        />
        <h1 className="text-4xl font-bold">Our Menu</h1>
        <p className="max-w-xl text-muted-foreground">
          Homemade dishes prepared fresh at Sanfoura Kitchen.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {menuItems.map((item) => (
          <Card key={item.name} className="overflow-hidden p-0 gap-0">
            <div className="relative aspect-[3/4]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid items-center gap-8 md:grid-cols-2">
        <div className="relative aspect-[3/4] max-h-[520px] overflow-hidden rounded-3xl">
          <Image
            src="/menu/packaging.jpg"
            alt="Sanfoura Kitchen packaging"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Packed with care</h2>
          <p className="text-muted-foreground">
            Every order leaves our kitchen in branded packaging so your food
            arrives fresh and ready to enjoy.
          </p>
          <Link
            href="/meals"
            className="inline-flex w-fit rounded-lg bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700"
          >
            Order now
          </Link>
        </div>
      </div>
    </section>
  );
}
