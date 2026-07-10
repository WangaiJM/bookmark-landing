import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import Tabs from "../../components/Tabs/Tabs";

import "./home.scss";
import ContentSection from "../../components/ContentSection/ContentSection";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <ContentSection
        title="Features"
        description=" Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go."
        component={<Tabs />}
      />
    </>
  );
};
export default Home;
