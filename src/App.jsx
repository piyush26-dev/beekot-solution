import Banner from "./container/banner-section/Banner";
import ContactUS from "./container/contact-us/ContactUS";
import CustomerReview from "./container/customer-review/CustomerReview";
import Footer from "./container/footer/Footer";
import IndustryWeServe from "./container/industry-we-serve/IndustryWeServe";
import OurServices from "./container/our-services/OurServices";
import OurWork from "./container/our-work/OurWork";
import OurWorkTwo from "./container/our-work/OurWorkTwo";
import Solution from "./container/solution/Solution";
import Support from "./container/support/Support";
import SupportTwo from "./container/support/SupportTwo";
import Navbar from "./container/top-navbar/Navbar";

function App() {
  return (
    <>
      <div id="banner">
        <Navbar />
        <Banner />
      </div>
      <div>
        <IndustryWeServe />
        <OurWork />
        <OurWorkTwo />
        <OurServices />
        <Support />
        <Solution />
        <SupportTwo />
        <CustomerReview />
        <ContactUS />
        <Footer />
      </div>
    </>
  );
}

export default App;
