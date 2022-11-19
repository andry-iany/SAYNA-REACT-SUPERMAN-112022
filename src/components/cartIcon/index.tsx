import { Link } from "react-router-dom";
import cart from "../../assets/icones/icone_1.png";

const CartIcon = () => {
  return (
    <div className="d-flex">
      <Link
        to="/e-shop/cart"
        className="text-end px-4 mb-5 ms-auto d-inline-block"
      >
        <img className="basket" src={cart} alt="" />
      </Link>
    </div>
  );
};

export default CartIcon;
