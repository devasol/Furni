import "./App.css";
import ChairItems from "./components/home/chairItems/ChairItems";

import HomeLanding from "./components/home/homeLanding/HomeLanding";
import WeHelp from "./components/home/weHelp/weHelp";
import WhyChooseUs from "./components/home/whyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
      <HomeLanding />
      <ChairItems />
      <WhyChooseUs />
      <WeHelp />
    </>
  );
}

export default App;
