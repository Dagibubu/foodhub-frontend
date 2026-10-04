import { WhatsAppIcon } from "@/components/layout/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { chatUrl } from "@/lib/whatsapp";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Sanfoura Kitchen",
  description: "The story behind Sanfoura Kitchen, a homemade kitchen in the UAE.",
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">
            About {siteConfig.name}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {siteConfig.name} ({siteConfig.nameAr}) is a small homemade kitchen.
            Everything we serve is cooked at home, in small batches, with
            quality ingredients and a lot of care.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our menu mixes Emirati favourites like Khabeesa with Ethiopian
            dishes, savoury bakes, burgers and desserts. There is no app and no
            long checkout: choose your dishes, send us your order on WhatsApp,
            and we&apos;ll take it from there.
          </p>
          <Button
            asChild
            className="mt-6 bg-[#25D366] text-white hover:bg-[#1ebe5b]"
          >
            <a href={chatUrl()} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              Message us
            </a>
          </Button>
        </div>
        <div className="relative mx-auto aspect-3/4 w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/injera-platter.png"
            alt="Ethiopian veggie platter on injera"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
