import "./card.scss";

const Card = ({ image, title, desc, cta }) => {
  return (
    <article className="card" aria-labelledby={`${title}-title`}>
      <div className="card-info">
        <div className="card-info__image">
          <img src={image} alt={`${title} logo`} />
        </div>
        <div className="card-info__text">
          <h3 id={`${title}-title`}>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <div className="card-cta">
        <a
          href="#!"
          className="btn btn-primary"
          aria-label={`${cta} for ${title}`}
        >
          {cta}
        </a>
      </div>
    </article>
  );
};
export default Card;
