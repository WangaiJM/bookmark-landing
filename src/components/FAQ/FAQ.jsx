import { useEffect, useState } from "react";
import Arrow from "../../assets/images/icon-arrow.svg";

import "./faq.scss";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("data/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  return (
    <section className="faq">
      {faqs.map((faq, index) => {
        const handleClick = (value) => {
          setActiveIndex(value === activeIndex ? null : value);
        };

        return (
          <div className="faq-item" key={index}>
            <div
              className="faq-item__question"
              onClick={() => handleClick(index)}
            >
              <h2>{faq.question}</h2>
              <img src={Arrow} alt="" />
            </div>
            <div
              className={
                index === activeIndex
                  ? "faq-item__answer active"
                  : "faq-item__answer"
              }
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
      <div className="faq-cta">
        <a href="#!" className="btn btn-primary">
          More
        </a>
      </div>
    </section>
  );
};
export default FAQ;
