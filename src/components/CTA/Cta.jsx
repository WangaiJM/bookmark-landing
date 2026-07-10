import "./cta.scss";

const cta = () => {
  return (
    <section className="cta">
      <div className="cta-body">
        <h2>35,000+ ALREADY JOINED</h2>
        <p>Stay up-to-date with what we’re doing</p>
      </div>
      <div className="cta-form">
        <form>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email address"
          />
          <button type="submit" className="btn btn-tertiary">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};
export default cta;
