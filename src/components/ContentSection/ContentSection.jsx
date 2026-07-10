import "./content-section.scss";

const ContentSection = ({ title, description, component }) => {
  return (
    <section className="section">
      <div className="section-head">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="section-body">{component}</div>
    </section>
  );
};
export default ContentSection;
