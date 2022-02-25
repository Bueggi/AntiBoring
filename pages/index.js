import Featured from "./components/pageComponents/featured";
import Layout from "./components/Layout";
import PromoSection from "./components/pageComponents/promoSection";
import Header from "./components/pageComponents/header";
import AboutUs from "./components/pageComponents/aboutus";
import LogoCloud from "./components/pageComponents/trustedBy";
import Explanation from "./components/pageComponents/explanation";
import Stats from "./components/pageComponents/stats";
import Perks from "./components/pageComponents/perks";

export default function Home() {
  return (
    <Layout>
      <Header />
      <LogoCloud />
      <Featured />
      <PromoSection />
      <Explanation />
      <Stats />
      {/* <Perks /> */}
      <AboutUs />
    </Layout>
  );
}
