import { ReactNode } from "react";
import "./style.scss";

type Props = {
  children: ReactNode;
  bg?: string;
};

const HeaderWrapper = ({ children, bg }: Props) => {
  return (
    <header id="header">
      {children}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${bg}),  linear-gradient(to bottom, #000 0%, #00000052 13%)`,
        }}
      ></div>
    </header>
  );
};

export default HeaderWrapper;
