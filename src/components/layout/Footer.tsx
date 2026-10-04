import { siteConfig } from "@/data/site";
import { chatUrl } from "@/lib/whatsapp";
import { ChefHat } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const Footer = () => (
  <footer className="border-t bg-teal-950 text-teal-50">
    <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
      <div>
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700">
            <ChefHat className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold">{siteConfig.name}</span>
        </div>
        <p className="max-w-xs text-sm text-teal-100/80">
          {siteConfig.tagline}. Order on WhatsApp and we&apos;ll confirm
          directly with you.
        </p>
      </div>

      <div>
        <h4 className="mb-3 font-semibold">Explore</h4>
        <ul className="space-y-2 text-sm text-teal-100/80">
          <li>
            <Link href="/menu" className="hover:text-white">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white">
              About us
            </Link>
          </li>
          <li>
            <Link href="/faqs" className="hover:text-white">
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="mb-3 font-semibold">Contact</h4>
        <ul className="space-y-2 text-sm text-teal-100/80">
          <li>
            <a
              href={chatUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {siteConfig.whatsappDisplay}
            </a>
          </li>
          <li>{siteConfig.hours}</li>
          <li>{siteConfig.location}</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-teal-900 py-4 text-center text-xs text-teal-100/70">
      © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
    </div>
  </footer>
);
