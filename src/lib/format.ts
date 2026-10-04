import { siteConfig } from "@/data/site";

export const formatPrice = (value: number) =>
  `${siteConfig.currency} ${value.toFixed(value % 1 === 0 ? 0 : 2)}`;
