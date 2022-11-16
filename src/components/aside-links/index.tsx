import "./style.scss";

import top from "../../assets/logos/logo_bat_flèche.png";
import fb from "../../assets/logos/icon_facebook.png";
import insta from "../../assets/logos/icon_ig.png";
import tw from "../../assets/logos/icon_tw.png";
import down from "../../assets/logos/logo_bat_flèche_2.png";

const AsideLinks = () => {
  return (
    <aside id="aside-link">
      <div className="container-wrapper">
        <div className="networks">
          <a href="#header" className="icon-large icon-link">
            <img src={top} alt="Go to the top" />
          </a>
          <a href="#" className="icon-small icon-link">
            <img src={fb} />
          </a>
          <a href="#" className="icon-small icon-link">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="#" className="icon-small icon-link">
            <img src={tw} alt="Twitter" />
          </a>
          <a href="#section-form" className="icon-large icon-link">
            <img src={down} alt="Fill up the form" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default AsideLinks;
