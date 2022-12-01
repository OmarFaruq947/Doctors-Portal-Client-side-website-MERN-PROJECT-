import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  max-w-7xl mx-auto px-12">
      <InfoCard
        cardTitle="Opening Hours"
        cardSubTitle="Lorem Ipsum is simply dummy text of the pri"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      />
      <InfoCard
        cardTitle="Visit our location"
        cardSubTitle="Brooklyn, NY 10036, United States"
        bgclassName="bg-accent"
        img={marker}
      />
      <InfoCard
        cardTitle="Contact us now"
        cardSubTitle="+000 123 456789"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      />
    </div>
  );
};

export default Info;
