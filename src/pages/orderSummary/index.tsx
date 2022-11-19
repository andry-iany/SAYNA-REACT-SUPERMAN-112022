import {
  useGetCartItems,
  useGetCartPriceSubtotal,
  useGetCartPriceTotal,
} from "../../hooks";

import classes from "./style.module.scss";

const OrderSummary = () => {
  const cartItems = useGetCartItems();
  const subtotal = useGetCartPriceSubtotal();
  const total = useGetCartPriceTotal();

  const renderCartItems = cartItems.map((item) => (
    <div className="d-flex gap-4 align-items-center mb-5">
      <div className={classes.itemImg + " border border-secondary"}>
        <img src={item.article.src} alt={item.article.name} />
      </div>

      <div>
        <p className="lead m-0">{item.article.name}</p>
        <h3 className="m-0">{item.article.price}€</h3>
        <small className="text-secondary">Quantité: {item.count}</small>
      </div>
    </div>
  ));

  return (
    <>
      <section className={classes.order}>
        <h3 className={"mb-5 " + classes.orderTitle}>Commande</h3>
        {renderCartItems}

        <div className="d-flex flex-wrap gap-3 border-secondary border-bottom mb-4 pb-3">
          <input
            type="text"
            className={classes.inputAdd + " form-control rounded-0"}
            placeholder="Promo code"
          />
          <button className="btn-translucent-red-blue" disabled>
            Ajouter
          </button>
        </div>

        <div className="d-flex justify-content-between">
          <p>Sous-total:</p>
          <p> {subtotal}€</p>
        </div>
        <div className="d-flex justify-content-between text-secondary">
          <p>Réduction:</p>
          <p>0 €</p>
        </div>
        <div className="d-flex justify-content-between border-secondary border-bottom text-secondary mb-4">
          <p>Taxe:</p>
          <p>0 €</p>
        </div>

        <div className="lead d-flex justify-content-between mb-5">
          <p>Total:</p>
          <p>{total}€</p>
        </div>

        <div className="d-flex gap-4 justify-content-center pt-5">
          <button className="btn-translucent-red-blue">
            Retouner au catalogue
          </button>
          <button className="btn-translucent-red-blue">
            Continuer vers le payment
          </button>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
