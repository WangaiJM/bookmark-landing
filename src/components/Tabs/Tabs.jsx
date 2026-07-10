import { useState } from "react";
import tabs1Image from "../../assets/images/illustration-features-tab-1.svg";
import tabs2Image from "../../assets/images/illustration-features-tab-2.svg";
import tabs3Image from "../../assets/images/illustration-features-tab-3.svg";

import "./tabs.scss";

const Tabs = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="tabs">
      <div className="tabs-head">
        <button
          onClick={() => setActive(0)}
          className={active === 0 ? "active" : ""}
        >
          Simple Bookmarking
        </button>
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}
        >
          Speedy Searching
        </button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >
          Easy Sharing
        </button>
      </div>

      <div className="tabs-body">
        <div
          className={
            active !== 0 ? "tabs-body__content hidden" : "tabs-body__content "
          }
        >
          <div className="tabs-illustration">
            <img src={tabs1Image} alt="" />
          </div>
          <div className="tabs-info">
            <div className="tabs-info__content">
              <h2>Bookmark in one click</h2>
              <p>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
            </div>
            <div className="tabs-info__cta">
              <a href="#!" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            active !== 1 ? "tabs-body__content hidden" : "tabs-body__content "
          }
        >
          <div className="tabs-illustration">
            <img src={tabs2Image} alt="" />
          </div>
          <div className="tabs-info">
            <div className="tabs-info__content">
              <h2>Intelligent search</h2>
              <p>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks..
              </p>
            </div>
            <div className="tabs-info__cta">
              <a href="#!" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            active !== 2 ? "tabs-body__content hidden" : "tabs-body__content "
          }
        >
          <div className="tabs-illustration">
            <img src={tabs3Image} alt="" />
          </div>
          <div className="tabs-info">
            <div className="tabs-info__content">
              <h2>Share your bookmarks</h2>
              <p>
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
            </div>
            <div className="tabs-info__cta">
              <a href="#!" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tabs;
