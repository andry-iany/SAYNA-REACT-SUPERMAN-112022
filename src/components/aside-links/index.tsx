import "./style.scss";

import fb from "../../assets/logos/icon_facebook.png";
import insta from "../../assets/logos/icon_ig.png";
import tw from "../../assets/logos/icon_tw.png";

const AsideLinks = () => {
  return (
    <aside id="aside-link">
      <div className="container-wrapper">
        <div className="networks">
          <a href="#" className="icon-medium icon-link">
            <img src={fb} />
          </a>
          <a href="#" className="icon-medium icon-link">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="#" className="icon-medium icon-link">
            <img src={tw} alt="Twitter" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default AsideLinks;
