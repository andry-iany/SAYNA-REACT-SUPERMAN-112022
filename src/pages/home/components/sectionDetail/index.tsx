import "./style.scss";

type Props = {
  title: string;
  description: string;
  images: string[];
};

const SectionDetail = (props: Props) => {
  const { title, description, images } = props;

  return (
    <section id="section">
      <div className="container">
        <h2 className="section-title">
          <p>{title}</p>
        </h2>

        <p className="section-text">{description}</p>

        <div className="section-images">
          {images.map((img, idx) => (
            <article className="section-image-wrapper" key={idx}>
              <img src={img} alt="" className="section-image" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionDetail;
