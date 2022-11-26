import React, { useState } from "react";
import cancel from "../../assets/icons/trash-can.png";
import DoctorsDeleteConfirmModal from "./DoctorsDeleteConfirmModal";

const DoctorsCard = ({ doctor, refetch }) => {
  const { name, email, specialty, img } = doctor;
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  return (
    <>
      {/* card-1 */}
      <div className="relative">
        {/* box-1 */}
        <div className="px-2">
          <div className="h-8 w-full rounded-t-lg border-b-2 border-[#F1F5F9] bg-neutral pl-[90px] shadow-lg">
            <div className="badge badge-primary badge-outline">{specialty}</div>
          </div>
        </div>
        {/* box-2 */}
        <div className="h-12 w-full rounded-lg bg-accent pl-[98px] shadow-xl flex justify-between">
          <small className="my-auto text-lg font-medium text-primary">
            {name}
            <p className=" text-xs text-secondary mt-[-5px]">{email}</p>
          </small>

          {/* The button to open modal */}
          <label
            onClick={() => setDeletingDoctor(doctor)}
            htmlFor="deleteConfirmModal"
            className="btn"
          >
            <img className="w-6 mr-3" src={cancel} alt=".." />
          </label>
        </div>
        {/* circle */}
        <div className="absolute top-2 left-6 h-16 w-16 rounded-full border-2 border-white shadow-md">
          <img
            className="rounded-full object-cover object-center"
            src={img}
            alt="..."
          />
        </div>
      </div>
      {deletingDoctor && (
        <DoctorsDeleteConfirmModal
          deletingDoctor={deletingDoctor}
          refetch={refetch}
          setDeletingDoctor={setDeletingDoctor}
        />
      )}
    </>
  );
};

export default DoctorsCard;
