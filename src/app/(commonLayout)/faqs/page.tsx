import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Sanfoura Kitchen",
};

const faqs = [
  {
    q: "How do I place an order?",
    a: "Add dishes to your cart, enter your name and phone number, and tap “Send order on WhatsApp”. Your order opens in WhatsApp ready to send. You can also message us directly.",
  },
  {
    q: "How do I pay?",
    a: "We confirm the total and the payment method with you on WhatsApp after you send your order.",
  },
  {
    q: "How much notice do you need?",
    a: "Everything is cooked fresh, so please order as early as you can. For large orders, parties or events, message us a few days ahead.",
  },
  {
    q: "Can you cater for allergies or special requests?",
    a: "Yes. Add a note to your order, or tell us on WhatsApp, and we will do our best.",
  },
  {
    q: "What are your opening hours?",
    a: `${siteConfig.hours}. You can message us any time and we will reply as soon as we can.`,
  },
];

export default function FaqsPage() {
  return (
    <section className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">
        Frequently asked questions
      </h1>
      <Accordion type="single" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
