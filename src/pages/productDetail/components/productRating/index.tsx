import classes from "./style.module.scss";
import star from "../../../../assets/icones/icone_2.png";

const ProductRating = () => {
  return (
    <div className={"d-inline-flex gap-1 " + classes.rating}>
      {new Array(5).fill("").map((val, idx) => (
        <img src={star} alt="star" key={idx} />
      ))}
    </div>
  );
};

export default ProductRating;
