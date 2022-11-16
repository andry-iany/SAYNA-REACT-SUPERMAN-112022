import icon_WB from "../../assets/logos/icon_WB.png";
import logo_sayna_white from "../../assets/logos/logo_sayna_white.png";
import icon_x from "../../assets/logos/icon_x.png";
import icon_DC from "../../assets/logos/icon_DC.png";
import icon_facebook from "../../assets/logos/icon_facebook.png";
import icon_ig from "../../assets/logos/icon_ig.png";
import icon_tw from "../../assets/logos/icon_tw.png";

import "./style.scss";

const Footer = () => {
  return (
    <footer id="footer" className="text-white">
      <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
        <img className="icon-small" src={icon_WB} alt="Warner Bros" />
        <small>
          Ce projet respecte l'univers cinématographique des films Batman
          récents. Version Nolan & Snyder & Reeves
        </small>
      </div>
      <div className="networks d-flex justify-content-center align-items-center gap-4">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <a href="#" className="icon-medium icon-link">
            <img src={logo_sayna_white} alt="logo Sayna" />
          </a>
          <img className="icon-small" src={icon_x} alt="" />
          <a href="#" className="icon-medium icon-link">
            <img src={icon_DC} alt="" />
          </a>
        </div>

        <a href="#" className="icon-small icon-link">
          <img src={icon_facebook} alt="Facebook" />
        </a>
        <a href="#" className="icon-small icon-link">
          <img src={icon_ig} alt="Instagram" />
        </a>
        <a href="#" className="icon-small icon-link">
          <img src={icon_tw} alt="Twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
