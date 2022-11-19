import ArrowDown from "../../components/arrow-down";
import Filter from "./components/filter";
import Header from "./components/header";
import Results from "./components/results";
import "./style.scss";

const EShop = () => {
  return (
    <div>
      <Header />
      <ArrowDown />
      <section className="row p-4">
        <article className="col-3">
          <Filter />
        </article>
        <article className="col-9">
          <Results />
        </article>
      </section>
    </div>
  );
};

export default EShop;
