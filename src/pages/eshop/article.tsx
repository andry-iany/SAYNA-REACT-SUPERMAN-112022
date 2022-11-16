import heart from "../../assets/icones/icone_7.svg";

export type Article = {
  id: number;
  src: string;
  name: string;
  category: string;
  price: number;
};

type Props = {
  article: Article;
};

const Article = ({ article }: Props) => {
  return (
    <article className="px-3 position-relative">
      <div className="card rounded-0 mb-4">
        <img src={"/articles/" + article.src} className="card-img-top" alt="" />
        <div className="card-body p-4 text-center">
          <h5 className="card-title text-uppercase">{article.name}</h5>
          <p className="card-text">
            <small className="prev-price text-decoration-line-through">
              {article.price}€
            </small>
            <span className="ms-3 h5">{article.price}€ </span>
          </p>
        </div>
      </div>

      <span className="sale text-uppercase d-inline-block">sale</span>
      <img src={heart} alt="" className="icon-heart" />
      <button className="btn-translucent-red d-block w-100">
        ajouter au panier
      </button>
    </article>
  );
};

export default Article;
