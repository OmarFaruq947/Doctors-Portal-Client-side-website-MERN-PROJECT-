import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DoctorsCard from "./DoctorsCard";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch(`https://doctors-portal24.onrender.com/doctors`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="h-screen bg-[#F1F5F9] ">
        <div className="container mx-auto max-w-5xl">
          {/* title */}
          <div className="pt-12 pb-6 mx-auto space-y-2 px-4">
            <h1 className="text-center text-3xl font-medium text-accent">
              Manage Doctors
            </h1>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 p-12">
            {doctors.map((doctor) => (
              <DoctorsCard key={doctor._id} doctor={doctor} refetch={refetch} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageDoctors;
