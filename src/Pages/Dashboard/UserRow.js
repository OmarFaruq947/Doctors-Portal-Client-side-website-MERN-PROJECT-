import React from "react";
import { toast } from "react-toastify";
import cancel from "../../assets/icons/delete.png";
import UserDeleteConfirmationModal from "./UserDeleteConfirmationModal";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://doctors-portal24.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  //userDeleteHandler
  const userDeleteHandler = () => {
    <UserDeleteConfirmationModal />;
  };
  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{email}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {role !== "admin" && (
              <button onClick={makeAdmin} className="btn btn-primary btn-xs">
                Make Admin
              </button>
            )}
          </p>
        </td>
        <td className="p-1  border-b border-gray-200 bg-white text-sm">
          <button onClick={userDeleteHandler} className="btn btn-accent">
            <img className="w-5" src={cancel} alt="..." />
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
