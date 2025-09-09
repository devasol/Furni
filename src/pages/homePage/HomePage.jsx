import { useEffect } from "react";
import ChairItems from "../../components/home/chairItems/ChairItems";
import Footer from "../../components/home/footer/Footer";
import HomeLanding from "../../components/home/homeLanding/HomeLanding";
import Products from "../../components/home/products/Products";
import WeHelp from "../../components/home/weHelp/weHelp";
import WhyChooseUs from "../../components/home/whyChooseUs/WhyChooseUs";

export default function HomePage() {
  useEffect(function () {
    document.title = "Home | Furni";
  });
  return (
    <>
      <HomeLanding />
      <ChairItems />
      <WhyChooseUs />
      <WeHelp />
      <Products />
      <Footer />
    </>
  );
}
