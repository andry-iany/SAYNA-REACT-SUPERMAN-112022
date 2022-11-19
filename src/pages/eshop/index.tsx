import { useEffect, useState } from "react";
import ArrowDown from "../../components/arrow-down";
import { useGetAllArticleCategories, useGetAllArticles } from "../../hooks";
import { Article } from "../../types";
import Filter from "./components/filter";
import Header from "./components/header";
import Results from "./components/results";
import "./style.scss";

export type Filtertype = {
  title: string;
  options: string[];
};

const EShop = () => {
  const { categories } = useGetAllArticleCategories();
  const { articles } = useGetAllArticles();

  const filters: Filtertype[] = [{ title: "Catégorie", options: categories }];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  useEffect(() => {
    const art = selectedCategories.length
      ? articles.filter((article) =>
          selectedCategories.includes(article.category)
        )
      : articles;

    setFilteredArticles(art);
  }, [selectedCategories]);

  const handleChangeFilterCategories = (categories: string[]) => {
    setSelectedCategories([...categories]);
  };

  return (
    <div>
      <Header />
      <ArrowDown />
      <section className="row p-4">
        <article className="col-3">
          <Filter
            filters={filters}
            onFilterChange={handleChangeFilterCategories}
          />
        </article>
        <article className="col-9">
          <Results articles={filteredArticles} />
        </article>
      </section>
    </div>
  );
};

export default EShop;
