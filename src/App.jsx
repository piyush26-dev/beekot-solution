import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./container/top-navbar/Navbar";
import Footer from "./container/footer/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ConsultingServices from "./pages/Services/ConsultingServices";
import StartupServices from "./pages/Services/StartupServices";
import WebMobilityDevelopment from "./pages/Services/WebMobilityDevelopment";
import CreativeServices from "./pages/Services/CreativeServices";
import DigitalMarketing from "./pages/Services/DigitalMarketing";
import ManagedIndustries from "./pages/Services/ManagedIndustries";
import EngagementModel from "./pages/Services/EngagementModel";

function App() {
  return (
    <>
      <HashRouter>
        <div className="">
          <div id="banner">
            <Navbar />
          </div>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/startup-services" element={<StartupServices />} />
              <Route
                path="/web-development"
                element={<WebMobilityDevelopment />}
              />
              <Route path="/creative-services" element={<CreativeServices />} />
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route
                path="/consulting-services"
                element={<ConsultingServices />}
              />
              <Route
                path="/managed-industries"
                element={<ManagedIndustries />}
              />
              <Route path="/engagement-model" element={<EngagementModel />} />
            </Routes>
          </ScrollToTop>

          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
