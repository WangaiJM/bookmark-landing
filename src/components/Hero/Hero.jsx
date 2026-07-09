import heroImage from "../../assets/images/illustration-hero.svg";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-header">
        <img src={heroImage} alt="" />
      </div>
      <div className="hero-body">
        <h2 id="hero-title">A Simple Bookmark Manager</h2>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero-body__cta">
          <a href="#!" className="btn btn-primary">
            Get it on Chrome
          </a>
          <a href="#!" className="btn btn-secondary">
            Get it on Firefox
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
