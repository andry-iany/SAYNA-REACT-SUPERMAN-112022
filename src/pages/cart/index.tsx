import { Link } from "react-router-dom";
import { useGetCartItems, useGetCartPriceSubtotal } from "../../hooks";
import CartItem from "./components/cartItem";
import classes from "./style.module.scss";

const Cart = () => {
  const cartItems = useGetCartItems();
  const subtotal = useGetCartPriceSubtotal();

  return (
    <section className={classes.cart}>
      <h5 className={classes.cartTitle + " mb-5 text-uppercase fw-bold"}>
        Récapitulatif du panier
      </h5>

      {cartItems.length && (
        <>
          <section className="d-flex flex-column gap-4">
            {cartItems.map((item) => (
              <CartItem key={item.article.id} item={item} />
            ))}
          </section>

          <p className="text-end py-4 px-3">
            <span className="fw-light text-uppercase me-4">Sous total</span>
            <span className="h4">{subtotal}€</span>
          </p>
        </>
      )}

      {cartItems.length === 0 && (
        <p className={classes.textNoItems + " text-center mb-5"}>
          Votre panier est vide. <br />
          Ajouter des articles pour les voirs ici.
        </p>
      )}

      <div className="d-flex justify-content-center gap-5 pt-4">
        <Link
          className={
            classes.btnContinue + " btn-translucent-red-blue rounded d-block"
          }
          to="/e-shop"
        >
          CONTINUER MES ACHATS
        </Link>
        <Link
          to="/e-shop/order-summary"
          className={
            classes.btnContinue + " btn-translucent-red-blue rounded d-block"
          }
        >
          PASSER LA COMMANDE
        </Link>
      </div>
    </section>
  );
};

export default Cart;
