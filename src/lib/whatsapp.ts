import { siteConfig } from "@/data/site";

export interface OrderLine {
  name: string;
  price: number;
  quantity: number;
}

export interface OrderCustomer {
  name: string;
  phone: string;
  address?: string;
  notes?: string;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const chatUrl = () =>
  whatsappUrl(`Hello ${siteConfig.name}! I'd like to ask about your menu.`);

export const dishUrl = (dishName: string) =>
  whatsappUrl(`Hello ${siteConfig.name}! I'd like to order: ${dishName}`);

export function orderUrl(lines: OrderLine[], customer: OrderCustomer) {
  const total = lines.reduce((sum, l) => sum + l.price * l.quantity, 0);
  const rows = lines.map(
    (l) =>
      `• ${l.quantity} x ${l.name} - ${(l.price * l.quantity).toFixed(2)} ${siteConfig.currency}`,
  );
  const message = [
    `Hello ${siteConfig.name}! I'd like to place an order:`,
    "",
    ...rows,
    "",
    `Total: ${total.toFixed(2)} ${siteConfig.currency}`,
    "",
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    customer.address ? `Address: ${customer.address}` : "",
    customer.notes ? `Notes: ${customer.notes}` : "",
  ]
    .filter((line, i, arr) => line !== "" || arr[i - 1] !== "")
    .join("\n");
  return whatsappUrl(message);
}
