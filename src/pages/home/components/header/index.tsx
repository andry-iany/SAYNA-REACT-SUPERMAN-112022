import HeaderWrapper from "../../../../components/headerWrapper";
import dc from "../../../../assets/logos/logoDC.png";

import classes from "./style.module.scss";

const Header = () => {
  return (
    <HeaderWrapper bg="/superman/img1.png">
      <div className="d-flex align-items-bottom pt-5 mt-5">
        <img src={dc} />
        <div className="ms-2 d-flex flex-column justify-content-end">
          <h1 className={classes.title + " mb-1"}>SUPERMAN</h1>
          <h2 className={classes.subtitle}>L'HOMME D'ACIER</h2>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
