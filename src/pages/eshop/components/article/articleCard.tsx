import { Link } from "react-router-dom";
import type { Article as ArticleType } from "../../../../types";
import classes from "./article.module.scss";

type Props = {
  article: ArticleType;
};

const ArticleCard = ({ article }: Props) => {
  return (
    <Link className={classes.article} to={"/e-shop/product/" + article.id}>
      <div className="card rounded-0 mb-4">
        <img
          src={"/super-articles/" + article.src}
          className="card-img-top"
          alt=""
          style={{
            width: "100%",
            height: "320px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          className="card-body p-4 text-center"
          style={{ backgroundColor: "black" }}
        >
          <h6 className="card-title text-uppercase">{article.name}</h6>
          <p className="card-text h5 fw-bold">{article.price} €</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
