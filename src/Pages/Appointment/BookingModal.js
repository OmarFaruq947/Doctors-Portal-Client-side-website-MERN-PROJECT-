import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { name, slots } = treatment;
  const formattedDate = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;

    const booking = {
      // treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have and appointment on ${data.booking?.data} at ${data.booking?.slot}`
          );
        }
        refetch();
        // close modal
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-2 justify-items-center mt-4"
          >
            <input
              type="text"
              name="date"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />

            <select
              name="slot"
              required
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              className=" btn bg-gradient-to-r from-secondary to-primary w-full max-w-xs"
              value="Submit"
            />
          </form>

          <div className="modal-action">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2 btn-primary  font-bold text-white bg-gradient-to-r from-secondary to-primary"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
