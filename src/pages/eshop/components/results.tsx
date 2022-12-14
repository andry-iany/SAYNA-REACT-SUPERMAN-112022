import { Link } from "react-router-dom";
import CartIcon from "../../../components/cartIcon";
import { useGetAllArticles } from "../../../hooks";
import { Article as ArticleType } from "../../../types";
import Article from "./article";

type Props = {
  articles: ArticleType[];
};

const Results = ({ articles }: Props) => {
  const renderArticles = articles.map((article) => {
    return (
      <div className="col-12 col-lg-6 col-xl-4" key={article.id}>
        <Article article={article} />
      </div>
    );
  });

  return (
    <section id="results" className="px-3 text-white">
      <CartIcon />

      <div className="d-flex justify-content-between mb-5">
        <h5>Résultats: 122</h5>
        <select className="form-select">
          <option>Trier par</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="row article-wrapper">{renderArticles}</div>
    </section>
  );
};

export default Results;
