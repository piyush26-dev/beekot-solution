import Banner from "./container/banner-section/Banner";
import IndustryWeServe from "./container/industry-we-serve/IndustryWeServe";
import OurServices from "./container/our-services/OurServices";
import OurWork from "./container/our-work/OurWork";
import OurWorkTwo from "./container/our-work/OurWorkTwo";
import Navbar from "./container/top-navbar/Navbar";


function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <IndustryWeServe/>
    <OurWork/>
    <OurWorkTwo/>
    <OurServices/>
    </>
  );
}

export default App
