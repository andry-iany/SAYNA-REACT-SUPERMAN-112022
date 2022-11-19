import ProductImage from "./components/productImage";
import ProductRating from "./components/productRating";

const srcSet = [
  "/super-articles/article-1.jpg",
  "/super-articles/article-2.jpeg",
  "/super-articles/article-3.jpeg",
];

const ProductDetail = () => {
  return (
    <div className="row border-secondary border-bottom pb-4 mb-4">
      <div className="col-md-6 col-lg-5 pb-5">
        <ProductImage srcSet={srcSet} />
      </div>

      <div className="col-md-6 col-lg-7">
        <div className="d-flex align-items-center gap-3">
          <ProductRating />
        </div>

        {/* <h1 className="text-uppercase border-secondary border-bottom pt-3 pb-5 mb-4">
        {{ article.name }}
      </h1>

      <div className="d-flex justify-content-between mb-4">
        <h2 className="mb-4">{{ article.price }}€</h2>
        <div className="d-flex align-items-center gap-3">
          <span className="text-decoration-underline">En stock</span>
        </div>
      </div>

      <div className="d-flex gap-4 border-secondary border-bottom pt-3 pb-5 mb-4">
        <button className="add-to-cart" (click)="onAddToCart(article)">
          ajouter au panier
        </button>
      </div> */}

        {/* <p>
        {{ article.description }}
      </p> */}
      </div>
    </div>
  );
};

export default ProductDetail;
