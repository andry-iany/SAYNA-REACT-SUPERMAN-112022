import { useParams } from "react-router-dom";
import { useGetArticleById } from "../../hooks";
import ProductReview from "./components/productReview";
import ProductImage from "./components/productImage";
import ProductRating from "./components/productRating";

import ProductSimilar from "./components/productSimilar";

const ProductDetail = () => {
  const params = useParams();
  const id = Number(params?.["id"]);
  const { article } = useGetArticleById(id);

  console.log({ article });

  const srcSet = [
    `/super-articles/${article?.src}`,
    "/super-articles/article-1.jpg",
    "/super-articles/article-2.jpeg",
  ];

  const onAddToCart = (e: any) => {};

  return (
    <div>
      <div className="row border-secondary border-bottom pb-4 mb-4">
        <div className="col-md-6 col-lg-5 pb-5">
          <ProductImage srcSet={srcSet} />
        </div>

        <div className="col-md-6 col-lg-7">
          <div className="d-flex align-items-center gap-3">
            <ProductRating />
          </div>

          <h1 className="text-uppercase border-secondary border-bottom pt-3 pb-5 mb-4">
            {article?.name}
          </h1>

          <div className="d-flex justify-content-between mb-4">
            <h2 className="mb-4">{article?.price}€</h2>
            <div className="d-flex align-items-center gap-3">
              <span className="text-decoration-underline">En stock</span>
            </div>
          </div>

          <div className="d-flex gap-4 border-secondary border-bottom pt-3 pb-5 mb-4">
            <button
              className="btn-translucent-red-blue rounded d-block"
              onClick={onAddToCart}
            >
              ajouter au panier
            </button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptate possimus minima molestiae obcaecati? Consectetur
            obcaecati, libero possimus doloremque hic nesciunt animi, suscipit
            quo, illo quae delectus eum dolorum excepturi?
          </p>
        </div>
      </div>

      <div className="text-secondary border-secondary border-bottom pb-4 mb-4">
        <p className="lead">Caractéristiques</p>
        <p className="detail-content">Matériaux : </p>
        <p className="detail-content">Couleur : </p>
        <p className="detail-content">Poids : </p>
        <p className="detail-content">Capacité : </p>
      </div>

      <div className="text-secondary border-secondary border-bottom pb-4 mb-4">
        <p className="lead">Livraison</p>
        <p className="detail-content">Livraison à domicile.</p>
        <p className="detail-content">Retrait en point relais.</p>
        <p className="detail-content">Délai de livraison 2-4 jours</p>
      </div>

      <ProductReview />

      <ProductSimilar id={id} />
    </div>
  );
};

export default ProductDetail;
