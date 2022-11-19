import { Article } from "../types";
import { articles, reviews } from "./data";

export const useGetAllArticles = () => {
  return { articles, isLoading: false, isError: false };
};

export const useGetArticleById = (id: Article["id"]) => {
  const article = articles[id];
  return { article, isLoading: false, isError: false };
};

export const useGetReviewByArticleId = (id: Article["id"]) => {
  return { reviews, isLoading: false, isError: false };
};
