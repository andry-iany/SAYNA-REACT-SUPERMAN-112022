import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import EShop from "./pages/eshop";
import Game from "./pages/game";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from "./components/nav";
import ContainerWrapper from "./components/container";
import AsideLinks from "./components/aside-links";
import Footer from "./components/footer";

function App() {
  return (
    <div id="App">
      <ContainerWrapper>
        <Nav />
        <Routes>
          <Route element={<EShop />} path="/e-shop" />
          <Route element={<Game />} path="/game" />
          <Route element={<Navigate to="/e-shop" />} path="*" />
        </Routes>
        <Footer />
      </ContainerWrapper>
      <AsideLinks />
    </div>
  );
}

export default App;
