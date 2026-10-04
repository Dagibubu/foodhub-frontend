import { WhatsAppIcon } from "@/components/layout/WhatsAppIcon";
import { MenuCard } from "@/components/modules/menu/MenuCard";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/menu";
import { siteConfig } from "@/data/site";
import { chatUrl } from "@/lib/whatsapp";
import { Clock, Flame, HeartHandshake, MessageCircle, ShoppingBag, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    icon: Utensils,
    title: "Pick your dishes",
    text: "Browse the menu and add what you love to your cart.",
  },
  {
    icon: MessageCircle,
    title: "Send us your order",
    text: "One tap opens WhatsApp with your order ready to send.",
  },
  {
    icon: HeartHandshake,
    title: "We confirm & cook",
    text: "We confirm the details with you, then cook everything fresh.",
  },
];

const highlights = [
  { icon: Flame, title: "Cooked fresh", text: "Made to order in a home kitchen." },
  { icon: HeartHandshake, title: "Made with love", text: "Family recipes and real ingredients." },
  { icon: Clock, title: siteConfig.hours, text: "Message us any time to order." },
];

export default function Home() {
  const specials = menuItems.filter((item) => item.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-b from-teal-50 to-background">
        <div className="container mx-auto grid items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-700">
              {siteConfig.nameAr} · Homemade kitchen
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Homemade food, cooked fresh with love
            </h1>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Emirati, Ethiopian and international dishes made at home by
              Sanfoura. Choose your meal and order straight on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#1ebe5b]"
              >
                <a href={chatUrl()} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Order on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/menu">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  View menu
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-4/3 w-full max-w-xl overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/logo.png"
              alt="Sanfoura Kitchen - Emirati Khabeesa"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container mx-auto grid gap-4 px-4 py-10 sm:grid-cols-3">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3 rounded-2xl border p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Specials */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Today&apos;s favourites</h2>
            <p className="mt-1 text-muted-foreground">
              A taste of what we&apos;re cooking.
            </p>
          </div>
          <Button asChild variant="link" className="text-teal-700">
            <Link href="/menu">See full menu →</Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specials.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-amber-50 py-14">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            How ordering works
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-700 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-semibold">
                  {i + 1}. {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="container mx-auto grid items-center gap-8 px-4 py-14 md:grid-cols-2">
        <div className="relative mx-auto aspect-3/4 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/packaging.png"
            alt="Sanfoura Kitchen branded takeaway bags and trays"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Packed with care</h2>
          <p className="mt-4 text-muted-foreground">
            Every order is packed in our own branded bags and trays, ready for
            you to enjoy at home or share with family and friends. Hosting an
            event? Message us on WhatsApp for large orders and catering.
          </p>
          <Button
            asChild
            className="mt-6 bg-[#25D366] text-white hover:bg-[#1ebe5b]"
          >
            <a href={chatUrl()} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              Chat with us
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
