import HeaderWrapper from "../../../components/headerWrapper";

const Header = () => {
  return (
    <HeaderWrapper bg={"/superman/img20.png"}>
      <h1 className="mx-auto ms-lg-0 text-uppercase fw-bolder d-flex align-items-center h-100 text-white">
        <span>ENVIE D'UN SLIP JAUNE ?</span>
      </h1>
    </HeaderWrapper>
  );
};

export default Header;
