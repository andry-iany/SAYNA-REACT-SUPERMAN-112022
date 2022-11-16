import { ReactNode } from "react";
import "./style.scss";

type Props = {
  children?: ReactNode;
};

const ContainerWrapper = (props: Props) => {
  const { children } = props;
  return <div id="container-wrapper">{children}</div>;
};

export default ContainerWrapper;
