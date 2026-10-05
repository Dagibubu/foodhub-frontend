import { WhatsAppIcon } from "@/components/layout/WhatsAppIcon";
import { MenuShowcase } from "@/components/modules/home/MenuShowcase";
import { MenuCard } from "@/components/modules/menu/MenuCard";
import { menuItems } from "@/data/menu";
import { chatUrl } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/format";
import {
  ArrowRight,
  Clock,
  Flame,
  HeartHandshake,
  Leaf,
  MessageCircle,
  PackageCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  { icon: Flame, label: "Cooked fresh" },
  { icon: Leaf, label: "Real ingredients" },
  { icon: HeartHandshake, label: "Homemade with love" },
  { icon: MessageCircle, label: "Order on WhatsApp" },
  { icon: Clock, label: "Open daily" },
];

const RED = "bg-[#f2402f] hover:bg-[#d93424]";

export default function Home() {
  const specials = menuItems.filter((item) => item.featured);
  const [first, second] = specials;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#d9f0f1]">
        <div className="container mx-auto grid items-center gap-10 px-4 pb-44 pt-12 md:grid-cols-2 md:pb-52 md:pt-20">
          <div className="animate-fade-up">
            <h1 className="text-4xl font-extrabold leading-[1.1] text-[#0f2a43] md:text-6xl">
              Homemade food
              <br />
              made with <span className="text-[#f2402f]">love</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-[#0f2a43]/70">
              Emirati, Ethiopian and international dishes cooked fresh at home
              by Sanfoura. Pick your meal and order straight on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={chatUrl()}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex h-12 items-center rounded-full px-8 font-semibold text-white shadow-lg shadow-red-500/30 transition ${RED}`}
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Order Now
              </a>
              <Link
                href="/menu"
                className="inline-flex h-12 items-center rounded-full border-2 border-[#3d9fb0] px-8 font-semibold text-[#0f2a43] transition hover:bg-white"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* Bowl + floating dishes */}
          <div className="relative mx-auto aspect-square w-full max-w-md md:max-w-lg">
            <div className="absolute inset-[6%] overflow-hidden rounded-full border-[10px] border-white shadow-2xl">
              <Image
                src="/images/hero-homemade.jpg"
                alt="Homemade berry crumble from Sanfoura Kitchen"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <Image
              src="/images/burger.png"
              alt=""
              width={140}
              height={140}
              className="animate-float absolute -left-2 top-[8%] h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl md:h-32 md:w-32"
            />
            <Image
              src="/images/ice-cream-cake.png"
              alt=""
              width={120}
              height={120}
              className="animate-float-slow absolute -right-2 top-[22%] h-20 w-20 rounded-full border-4 border-white object-cover shadow-xl md:h-28 md:w-28"
            />
            <Image
              src="/images/chicken-puff.png"
              alt=""
              width={110}
              height={110}
              className="animate-float absolute bottom-[4%] left-[12%] h-16 w-16 rounded-full border-4 border-white object-cover shadow-xl md:h-24 md:w-24"
            />
            <Leaf className="animate-float-slow absolute right-[8%] top-0 h-10 w-10 rotate-45 text-emerald-600" />
            <Leaf className="animate-float absolute bottom-[14%] right-[4%] h-8 w-8 -rotate-12 text-emerald-500" />
          </div>
        </div>

        {/* Overlapping cards + feature bar */}
        <div className="absolute inset-x-0 bottom-0 translate-y-0">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { item: first, bg: "bg-[#a78a2b]" },
                { item: second, bg: "bg-[#3d9fb0]" },
              ].map(
                ({ item, bg }) =>
                  item && (
                    <Link
                      key={item.id}
                      href="/menu"
                      className={`flex items-center gap-4 rounded-t-3xl p-4 text-white shadow-xl transition hover:-translate-y-1 ${bg}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="h-20 w-20 shrink-0 rounded-full border-4 border-white object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-bold">{item.name}</h3>
                        <div className="mt-1 flex gap-0.5">
                          {[0, 1, 2, 3, 4].map((n) => (
                            <Star
                              key={n}
                              className="h-3.5 w-3.5 fill-amber-300 text-amber-300"
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xl font-extrabold">
                        {formatPrice(item.price)}
                      </span>
                    </Link>
                  ),
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-b-3xl bg-[#3d9fb0] px-6 py-5 text-white shadow-xl sm:grid-cols-3 md:grid-cols-5">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu showcase */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium text-slate-500">Our menu</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#0f2a43] md:text-4xl">
            Explore our homemade foods
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#f2402f]" />
        </div>
        <MenuShowcase />
      </section>

      {/* Favourites */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium text-slate-500">Fresh from the kitchen</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0f2a43] md:text-4xl">
              Today&apos;s favourites
            </h2>
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#f2402f]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specials.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 font-semibold text-[#3d9fb0] hover:text-[#f2402f]"
            >
              See full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="container mx-auto grid items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 -rotate-3 rounded-[2.5rem] bg-[#d9f0f1]" />
          <div className="relative aspect-3/4 overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
            <Image
              src="/images/packaging.png"
              alt="Sanfoura Kitchen branded takeaway bags and trays"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Ready to enjoy</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#0f2a43] md:text-4xl">
            Packed with care
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-[#f2402f]" />
          <p className="mt-5 text-lg text-slate-600">
            Every order is packed in our own branded bags and trays, ready for
            you to enjoy at home or share with family and friends. Hosting an
            event? Message us on WhatsApp for large orders and catering.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            {["Branded bags and trays", "Packed fresh to order", "Catering for events"].map(
              (t) => (
                <li key={t} className="flex items-center gap-3">
                  <PackageCheck className="h-5 w-5 text-[#3d9fb0]" />
                  {t}
                </li>
              ),
            )}
          </ul>
          <a
            href={chatUrl()}
            target="_blank"
            rel="noreferrer"
            className={`mt-8 inline-flex h-12 items-center rounded-full px-8 font-semibold text-white shadow-lg shadow-red-500/30 transition ${RED}`}
          >
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            Chat with us
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#3d9fb0] px-6 py-14 text-center text-white md:px-16">
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-[#f2402f]/30" />
          <h2 className="relative text-3xl font-extrabold md:text-5xl">
            Hungry? Let&apos;s cook for you.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">
            Tell us what you feel like eating and we&apos;ll confirm everything
            directly with you on WhatsApp.
          </p>
          <a
            href={chatUrl()}
            target="_blank"
            rel="noreferrer"
            className={`relative mt-8 inline-flex h-12 items-center rounded-full px-8 font-semibold text-white shadow-lg transition ${RED}`}
          >
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            Order on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
