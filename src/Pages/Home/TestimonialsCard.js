import React from "react";

const TestimonialsCard = ({ review }) => {
  const { name, description, avatar, country } = review;
  return (
    <>
      <div className="p-10 rounded-2xl bg-base-100 drop-shadow-lg lg:max-w-lg max-w-md max-h-50 align-middle">
        <p>{description}</p>
        <div className="flex mt-10 ">
          <div className="avatar">
            <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar} alt="..." />
            </div>
          </div>

          <div className="ml-2">
            <h6 className="text-accent font-bold text-[20px]">{name}</h6>
            <p>{country}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
