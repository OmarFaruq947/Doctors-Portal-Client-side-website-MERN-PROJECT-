import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      avatar: people1,
      name: "Winson Herry",
      country: "California",
    },
    {
      _id: 2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      avatar: people2,
      name: "Winson Herry",
      country: "California",
    },
    {
      _id: 3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      avatar: people3,
      name: "Winson Herry",
      country: "California",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-12">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-[36px]">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-[98px] lg:w-[191px]" src={quote} alt="" />
        </div>
      </div>
      <div className="my-20 gap-10 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <TestimonialsCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
