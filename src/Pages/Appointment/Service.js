import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;

  return (
    <>
      <div className="card shadow-sm  border-solid border-2 hover:border-primary">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-primary">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another date</span>
            )}
          </p>
          <p className="text-accent">
            {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
          </p>
          <div className="card-actions justify-center">
            
            <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
              htmlFor="booking-modal"
              className="btn btn-sm btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

// <button disabled={slots.length === 0} className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
