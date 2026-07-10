import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import ContentSection from "../../components/ContentSection/ContentSection";
import Tabs from "../../components/Tabs/Tabs";
import HomeCards from "../../components/HomeCards/HomeCards";

import "./home.scss";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <ContentSection
          title="Features"
          description=" Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go."
          component={<Tabs />}
        />
        <ContentSection
          title={"Download the extension"}
          description={
            "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
          }
          component={<HomeCards />}
        />
      </main>
    </>
  );
};
export default Home;
