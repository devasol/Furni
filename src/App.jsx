import "./App.css";
import ChairItems from "./components/home/chairItems/ChairItems";

import HomeLanding from "./components/home/homeLanding/HomeLanding";
import Products from "./components/home/products/Products";
import WeHelp from "./components/home/weHelp/weHelp";
import WhyChooseUs from "./components/home/whyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
      <HomeLanding />
      <ChairItems />
      <WhyChooseUs />
      <WeHelp />
      <Products />
    </>
  );
}

export default App;
