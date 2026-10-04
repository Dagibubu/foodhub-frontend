// Edit this file to change the menu. Set `available: false` to mark a dish as sold out.
// Prices are in AED. Photos live in /public/images.

export type MenuCategory = "Savory" | "Ethiopian" | "Desserts";

export interface MenuItem {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  available: boolean;
  featured?: boolean;
}

export const menuCategories: MenuCategory[] = [
  "Savory",
  "Ethiopian",
  "Desserts",
];

export const menuItems: MenuItem[] = [
  {
    id: "cheese-burger",
    name: "Homemade Cheese Burger",
    description:
      "Juicy beef patty, fresh lettuce, tomato and cheese in a soft sesame bun baked at home.",
    price: 25,
    image: "/images/burger.png",
    category: "Savory",
    available: true,
    featured: true,
  },
  {
    id: "chicken-puff",
    name: "Chicken Puff with Vegetables & Mozzarella",
    nameAr: "باف محشي بالدجاج والخضار وجبنة الموزاريلا",
    description:
      "Golden puff pastry filled with chicken and vegetables, topped with melted mozzarella.",
    price: 30,
    image: "/images/chicken-puff.png",
    category: "Savory",
    available: true,
    featured: true,
  },
  {
    id: "ethiopian-platter",
    name: "Ethiopian Veggie Platter",
    description:
      "Injera served with lentil stew, collard greens, potatoes, carrots, beetroot and fresh salad.",
    price: 45,
    image: "/images/injera-platter.png",
    category: "Ethiopian",
    available: true,
    featured: true,
  },
  {
    id: "ice-cream-cake",
    name: "Chocolate Ice Cream Cake",
    nameAr: "كيكة الآيس كريم بالشوكولاتة",
    description:
      "Creamy layered ice cream cake dusted with cocoa and topped with chocolate chips.",
    price: 35,
    image: "/images/ice-cream-cake.png",
    category: "Desserts",
    available: true,
    featured: true,
  },
];
