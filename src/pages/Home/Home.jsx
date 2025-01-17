import React from "react";
import Banner from "../../container/banner-section/Banner";
import IndustryWeServe from "../../container/industry-we-serve/IndustryWeServe";
import OurWork from "../../container/our-work/OurWork";
import OurWorkTwo from "../../container/our-work/OurWorkTwo";
import OurServices from "../../container/our-services/OurServices";
import Support from "../../container/support/Support";
import Solution from "../../container/solution/Solution";
import SupportTwo from "../../container/support/SupportTwo";
import CustomerReview from "../../container/customer-review/CustomerReview";
import ContactUS from "../../container/contact-us/ContactUS";

const Home = () => {
  return (
    <>
      <Banner />
      <IndustryWeServe />
      <OurWork />
      <OurWorkTwo />
      <OurServices />
      <Support />
      <Solution />
      <SupportTwo />
      <CustomerReview />
      <ContactUS />
    </>
  );
};

export default Home;
