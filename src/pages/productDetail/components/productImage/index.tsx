import classes from "./style.module.scss";

type Props = {
  srcSet: string[];
};

const ProductImage = ({ srcSet }: Props) => {
  return (
    <div className={"d-flex " + classes.imgWrapper}>
      <img src={srcSet[0]} alt="" className={classes.imgHighlight} />
      <div className={"d-flex flex-column " + classes.imgsOther}>
        {srcSet.map((src) => (
          <img src={src} key={src} alt="" />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
