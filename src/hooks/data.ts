import { Article, CartItem, Review } from "../types";

export const articles: Article[] = [
  {
    id: 1,
    name: "Lorem Ipsum",
    category: "equipements",
    price: 109,
    src: "/super-articles/article-1.jpg",
  },
  {
    id: 2,
    name: "Key rings",
    category: "equipements",
    price: 25,
    src: "/super-articles/article-2.jpeg",
  },
  {
    id: 3,
    name: "Other Equipments",
    category: "equipements",
    price: 8,
    src: "/super-articles/article-3.jpeg",
  },
  {
    id: 4,
    name: "t-shirt",
    category: "vêtements",
    price: 132,
    src: "/super-articles/article-4.jpeg",
  },
  {
    id: 5,
    name: "Cape",
    category: "vêtements",
    price: 198,
    src: "/super-articles/article-5.jpeg",
  },
  {
    id: 6,
    name: "Mug",
    category: "goodies",
    price: 25,
    src: "/super-articles/article-6.jpeg",
  },
  {
    id: 7,
    name: "Outfit",
    category: "vêtements",
    price: 45,
    src: "/super-articles/article-7.jpeg",
  },
  {
    id: 8,
    name: "Mug",
    category: "goodies",
    price: 10,
    src: "/super-articles/article-8.jpeg",
  },
  {
    id: 9,
    name: "Key rings",
    category: "goodies",
    price: 15,
    src: "/super-articles/article-9.png",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    reviewer: "Robert",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim elit id turpis scelerisque mollis. Nulla vehicula velit augue, ut maximus est porttitor quis. Morbi finibus, nulla non consectetur convallis, eros mi sollicitudin metus, id sollicitudin nunc ligula eu dui.",
  },
  {
    id: 2,
    reviewer: "John",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim elit id turpis scelerisque mollis. Nulla vehicula velit augue, ut maximus est porttitor quis. Morbi finibus, nulla non consectetur convallis, eros mi sollicitudin metus, id sollicitudin nunc ligula eu dui.",
  },
];

export const cartItems: CartItem[] = [
  {
    count: 23,
    article: articles[0],
  },
  {
    count: 23,
    article: articles[2],
  },
];
