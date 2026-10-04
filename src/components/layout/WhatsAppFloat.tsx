import { chatUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={chatUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
