import { useGetSimilarArticles } from "../../../../hooks";
import type { Article as ArticleType } from "../../../../types";
import ArticleCard from "../../../eshop/components/article/articleCard";

import classes from "./style.module.scss";

type Props = {
  id: ArticleType["id"];
};

const ProductSimilar = ({ id }: Props) => {
  const { articles } = useGetSimilarArticles(id);

  return (
    <>
      <h2 className="mb-5">Produits similaires</h2>

      <div className={"d-flex w-100 gap-3 overflow-auto " + classes.similar}>
        {articles.map((article) => (
          <div key={article.id} className={classes.articleWrapper}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductSimilar;
