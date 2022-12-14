import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from "./components/nav";
import EShop from "./pages/eshop";
import ContainerWrapper from "./components/container";
import Footer from "./components/footer";
import ProductDetail from "./pages/productDetail";
import Cart from "./pages/cart";
import OrderSummary from "./pages/orderSummary";
import Home from "./pages/home";

function App() {
  return (
    <div id="App">
      <ContainerWrapper>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<EShop />} path="/e-shop" />
          <Route element={<ProductDetail />} path="/e-shop/product/:id" />
          <Route element={<Cart />} path="/e-shop/cart" />
          <Route element={<OrderSummary />} path="/e-shop/order-summary" />
          <Route element={<Navigate to="/" />} path="*" />
        </Routes>
        <Footer />
      </ContainerWrapper>
    </div>
  );
}

export default App;
