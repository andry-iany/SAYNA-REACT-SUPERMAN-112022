import { useGetReviewByArticleId } from "../../../../hooks";
import ProductRating from "../productRating";

const ProductReview = () => {
  const { reviews } = useGetReviewByArticleId(1);

  return (
    <div className="mb-5">
      <h3>Commentaires</h3>

      {reviews.map((review) => (
        <div
          className="border-secondary border-bottom pb-4 pt-4"
          key={review.id}
        >
          <div className="d-flex gap-3 align-items-start">
            <ProductRating />
            <h4 className="reviewer-name text-uppercase w-100 fw-light">
              {review.reviewer}
            </h4>
            <span className="text-secondary">11.10.21</span>
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReview;
