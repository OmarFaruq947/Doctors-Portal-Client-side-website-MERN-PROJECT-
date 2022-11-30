import React from "react";
import { toast } from "react-toastify";

const DoctorsDeleteConfirmModal = ({
  deletingDoctor,
  refetch,
  setDeletingDoctor,
}) => {
  const { name, email } = deletingDoctor;

  // delete doctor
  const handleDelete = () => {
    fetch(`https://doctors-portal24.onrender.com/doctors/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setDeletingDoctor(false);
          toast.success(`${name} is Deleted`);
          refetch();
        }
      });
  };
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="deleteConfirmModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are You Sure You Want To Delete{" "}
            <span className="text-[24px] font-mono italic text-secondary">
              {name}
            </span>{" "}
            !
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button className="btn btn-info" onClick={() => handleDelete()}>
              Yes
            </button>
            <label htmlFor="deleteConfirmModal" className="btn btn-warning">
              No
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsDeleteConfirmModal;
