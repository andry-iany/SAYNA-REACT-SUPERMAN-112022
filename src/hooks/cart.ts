import { cartItems } from "./data";

export const useGetCartItems = () => {
  return cartItems;
};

export const useGetCartPriceSubtotal = () => {
  const cartItems = useGetCartItems();
  return cartItems
    .map((item) => item.article.price * item.count)
    .reduce((acc, curr) => acc + curr, 0);
};

export const useGetCartPriceTotal = () => {
  return useGetCartPriceSubtotal();
};
