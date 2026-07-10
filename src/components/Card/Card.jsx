import "./card.scss";

const Card = ({ image, title, desc, cta }) => {
  return (
    <article className="card">
      <div className="card-info">
        <div className="card-info__image">
          <img src={image} alt="" />
        </div>
        <div className="card-info__text">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="card-cta">
        <a href="#!" className="btn btn-primary">
          {cta}
        </a>
      </div>
    </article>
  );
};
export default Card;
