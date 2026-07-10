import ChromeImage from "../../assets/images/logo-chrome.svg";
import FirefoxImage from "../../assets/images/logo-firefox.svg";
import OperaImage from "../../assets/images/logo-opera.svg";

import Card from "../Card/Card";

import "./home-cards.scss";

const HomeCards = () => {
  return (
    <section className="homecards">
      <Card
        title={"Add to Chrome"}
        desc={"Minimum version 62"}
        image={ChromeImage}
        cta={"Add & Install Extension"}
      />
      <Card
        title={"Add to Firefox"}
        desc={"Minimum version 55"}
        image={FirefoxImage}
        cta={"Add & Install Extension"}
      />
      <Card
        title={"Add to Opera"}
        desc={"Minimum version 46"}
        image={OperaImage}
        cta={"Add & Install Extension"}
      />
    </section>
  );
};
export default HomeCards;
