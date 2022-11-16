import basket from "../../assets/icones/icone_1.png";
import Article from "./article";
import { articles } from "./data";

const Results = () => {
  const renderArticles = articles.map((article) => {
    return (
      <div className="col-12 col-lg-6 col-xl-4" key={article.id}>
        <Article article={article} />
      </div>
    );
  });

  return (
    <section id="results" className="px-3 text-white">
      <div className="text-end px-4 mb-4">
        <img className="basket" src={basket} alt="" />
      </div>

      <div className="d-flex justify-content-between mb-5">
        <h5>Résultats: 122</h5>
        <select className="form-select">
          <option selected>Trier par</option>
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
