import { WhatsAppIcon } from "@/components/layout/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { chatUrl } from "@/lib/whatsapp";
import { Clock, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sanfoura Kitchen",
  description: "Contact Sanfoura Kitchen on WhatsApp to place an order.",
};

export default function ContactPage() {
  const details = [
    { icon: Phone, label: "WhatsApp / Phone", value: siteConfig.whatsappDisplay },
    { icon: Clock, label: "Opening hours", value: siteConfig.hours },
    { icon: MapPin, label: "Location", value: siteConfig.location },
  ];

  return (
    <section className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold md:text-4xl">Contact us</h1>
      <p className="mt-2 text-muted-foreground">
        The fastest way to order or ask a question is WhatsApp.
      </p>

      <div className="mt-8 rounded-2xl border bg-teal-50 p-6 text-center">
        <p className="mb-4 font-medium">
          Tap below and we&apos;ll reply as soon as we can.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#25D366] text-white hover:bg-[#1ebe5b]"
        >
          <a href={chatUrl()} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {details.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-2xl border p-4">
            <Icon className="mb-2 h-5 w-5 text-teal-700" />
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="font-medium">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
