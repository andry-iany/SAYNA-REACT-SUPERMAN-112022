import { Article } from "../types";
import { articles, reviews } from "./data";

export const useGetAllArticles = () => {
  return { articles, isLoading: false, isError: false };
};

export const useGetArticleById = (id: Article["id"]) => {
  const article = articles.find((article) => article.id === id);
  return { article, isLoading: false, isError: false };
};

export const useGetReviewByArticleId = (id: Article["id"]) => {
  return { reviews, isLoading: false, isError: false };
};

export const useGetSimilarArticles = (id: Article["id"]) => {
  const { article } = useGetArticleById(id);

  const similarArticles = articles.filter(
    (art) => art.id !== id && art.category === article?.category
  );

  return { articles: similarArticles, isLoading: false, isError: false };
};
