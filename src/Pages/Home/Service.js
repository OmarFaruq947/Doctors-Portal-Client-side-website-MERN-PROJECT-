import React from "react";

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <>
      <div className="card bg-base-100 drop-shadow-lg lg:max-w-lg max-w-md max-h-50 align-middle mb-20">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl w-28 h-28" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Service;
