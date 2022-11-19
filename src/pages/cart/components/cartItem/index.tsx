import { CartItem as CartItemType } from "../../../../types";
import classes from "./style.module.scss";

type Props = {
  item: CartItemType;
};

const CartItem = ({ item }: Props) => {
  return (
    <article className="d-flex align-items-center flex-column flex-lg-row border py-5 px-4 gap-5">
      <div className="d-flex align-items-center justify-content-between justify-content-lg-start w-100 gap-5">
        <div className={classes.itemImg + " border border-secondary"}>
          <img src={item.article.src} alt="" />
        </div>

        <div>
          <p className="lead">{item.article.name}</p>
          <small className="text-secondary">
            Numéro du produit: {item.article.id}
          </small>
        </div>
      </div>

      <div className="d-flex align-items-center gap-5">
        <h3 className="text-light m-0">{item.article.price}€</h3>
        <div className={classes.itemCountWrapper}>
          <button>-</button>
          <span>{item.count}</span>
          <button>+</button>
        </div>

        <div
          className={
            classes.btnCancel +
            " d-flex align-items-center justify-content-center bg-white text-secondary rounded-circle"
          }
        >
          X
        </div>
      </div>
    </article>
  );
};

export default CartItem;
