import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const [user] = useAuthState(auth);

  const handleBooking = (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const slot = e.target.slot.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    console.log({ date, slot, name, email, phone });
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {treatment.name}
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
              {treatment.slots.map((slot, index) => (
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
