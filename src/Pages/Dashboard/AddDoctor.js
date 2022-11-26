import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const [imgFileName, setImgFileName] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  //image key
  const imageStorageKey = "03e7e889e81b7b7a103363f07722f87e";

  //pik data from form
  const onSubmit = async (data) => {
    setImgFileName(data.image[0].name);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to your database
          fetch(`http://localhost:5000/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted) {
                toast.success("Doctors added successfully");
                reset();
              } else {
                toast.error("Failed to add doctors");
              }

              // console.log("inserted doctor", inserted); //ok
            });
        }
      });
  };

  return (
    <div className="bg-[#F1F5F9]">
      <br />
      <br />
      <div className=" max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-3xl font-medium">Add Doctors</h1>
        <p className="text-slate-500">Welcome to Doctors portal website</p>

        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
          <div className="flex flex-col space-y-3">
            {/* name section */}
            <label htmlFor="name">
              <p className="font-medium text-slate-700 pb-2">Name</p>

              {errors.name?.type === "required" && (
                <span className="label-text-alt font-medium text-red-500 pb-2">
                  {errors.name.message}
                </span>
              )}
              <input
                name="name"
                type="text"
                className="w-full  py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Full Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required !",
                  },
                })}
              />
            </label>

            {/* email section */}
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Email address</p>
              {errors.email?.type === "required" && (
                <span className="label-text-alt font-medium text-red-500 pb-2">
                  {errors.email.message}
                </span>
              )}

              {errors.email?.type === "pattern" && (
                <span className="label-text-alt font-medium text-red-500 pb-2">
                  {errors.email.message}
                </span>
              )}
              <input
                name="email"
                type="email"
                className="w-full  py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter email address"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required !",
                  },
                  pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide Your Valid Email",
                })}
              />
            </label>

            {/* password field */}
            <label htmlFor="Specialty">
              <p className="font-medium text-slate-700 pb-2">specialty</p>

              <select
                {...register("specialty", {
                  required: {
                    value: true,
                    message: "Specialization is Required !",
                  },
                })}
                className="select w-full py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              >
                {services.map((service) => (
                  <option key={service._id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>

            {/* photo upload */}
            <div class="mb-6 pt-4">
              <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                Profile photo
              </label>

              <div class="mb-8">
                <input
                  type="file"
                  name="file"
                  id="file"
                  class="sr-only"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is Required !",
                    },
                  })}
                />
                <label
                  for="file"
                  class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span class="mb-2 block text-base font-medium text-[#6B7280]">
                      .jpeg, .png (file size maximum 5MB) <br />
                      {errors.image?.type === "required" && (
                        <span className="label-text-alt font-medium text-red-500 pb-2">
                          {errors.image.message}
                        </span>
                      )}
                    </span>
                    <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>

              <div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                <div class="flex items-center justify-between">
                  <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                    {imgFileName}
                  </span>
                  <button class="text-[#07074D]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <div class="rounded-md bg-[#F5F7FB] py-4 px-8">
                <div class="flex items-center justify-between">
                  <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                    banner-design.png
                  </span>
                  <button class="text-[#07074D]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                  <div class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"></div>
                </div>
              </div> */}
            </div>

            <input
              className=" btn w-full py-2  text-white bg-accent hover:bg-accent rounded-lg border-accent hover:shadow inline-flex space-x-2 items-center justify-center"
              value="ADD DOCTOR"
              type="submit"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
