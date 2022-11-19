import type { Article as ArticleType } from "../../../../types";
import ArticleCard from "./articleCard";
import heart from "../../../../assets/icones/icone_7.svg";

type Props = {
  article: ArticleType;
};

const Article = ({ article }: Props) => {
  return (
    <article className="px-3 position-relative">
      <ArticleCard article={article} />

      <img src={heart} alt="" className="icon-heart" />
      <span className="sale text-uppercase d-inline-block">sale</span>

      <button className="btn-translucent-blue rounded d-block w-100">
        ajouter au panier
      </button>
    </article>
  );
};

export default Article;
