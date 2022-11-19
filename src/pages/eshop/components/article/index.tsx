import { Link } from "react-router-dom";
import heart from "../../../../assets/icones/icone_7.svg";
import classes from "./article.module.scss";

import type { Article as ArticleType } from "../../../../types";

type Props = {
  article: ArticleType;
};

const Article = ({ article }: Props) => {
  return (
    <Link className={classes.article} to={"/e-shop/product/" + article.id}>
      <article className="px-3 position-relative">
        <div className="card rounded-0 mb-4">
          <img
            src={"/super-articles/" + article.src}
            className="card-img-top"
            alt=""
          />
          <div className="card-body p-4 text-center">
            <h6 className="card-title text-uppercase">{article.name}</h6>
            <p className="card-text h5 fw-bold">{article.price} €</p>
          </div>
        </div>

        <span className="sale text-uppercase d-inline-block">sale</span>
        <img src={heart} alt="" className="icon-heart" />
        <button className="btn-translucent-blue rounded d-block w-100">
          ajouter au panier
        </button>
      </article>
    </Link>
  );
};

export default Article;
