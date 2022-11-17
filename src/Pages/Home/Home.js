import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Dental from "./Dental";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Dental />
      <MakeAppointment />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
