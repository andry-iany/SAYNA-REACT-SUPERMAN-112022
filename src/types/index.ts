export type Article = {
  id: number;
  src: string;
  name: string;
  category: string;
  price: number;
};

export type Review = {
  id: number;
  reviewer: string;
  rating: number;
  content: string;
};

export type CartItem = {
  article: Article;
  count: number;
};

export type Cart = CartItem[];
