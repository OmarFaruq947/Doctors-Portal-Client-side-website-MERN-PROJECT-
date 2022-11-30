import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

//payment step-1
const stripePromise = loadStripe(
  "pk_test_51M8jpBSBClrxZKuWzQ4Rfu4F4dXObSmjp3jC3nYCacSG6jYnJ6p9n5tph8sKzRXXhdMZWjoK799cPRpq7nc8hPR900oBn4ZXyu"
);
const Payment = () => {
  const { id } = useParams();
  const { data: appointment, isLoading } = useQuery("doctors", () =>
    fetch(`https://doctors-portal24.onrender.com/booking/${id}`, {
      method: "GET",
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
      <section className="flex flex-col justify-center antialiased bg-[#F1F5F9] text-gray-600 min-h-screen p-4">
        <div className="h-full">
          <div className="max-w-[450px] mx-auto">
            <div className="bg-white shadow-lg rounded-lg mt-9">
              <header className="text-center px-5 pb-5">
                <svg
                  className="inline-flex -mt-9 w-[72px] h-[72px] fill-current rounded-full border-4 border-white box-content shadow mb-3"
                  viewBox="0 0 72 72"
                >
                  <path className="text-accent" d="M0 0h72v72H0z" />
                  <path
                    className="text-primary"
                    d="M30.217 48c.78-.133 1.634-.525 2.566-1.175.931-.65 1.854-1.492 2.769-2.525a30.683 30.683 0 0 0 2.693-3.575c.88-1.35 1.66-2.792 2.337-4.325-1.287 3.3-1.93 5.9-1.93 7.8 0 2.467.914 3.7 2.743 3.7.508 0 1.084-.083 1.727-.25.644-.167 1.169-.383 1.575-.65-.474-.267-.812-.708-1.016-1.325-.203-.617-.305-1.392-.305-2.325 0-.833.11-1.817.33-2.95.22-1.133.534-2.35.94-3.65.407-1.3.898-2.658 1.474-4.075A71.574 71.574 0 0 1 48 28.45c0-.167-.127-.35-.381-.55a5.313 5.313 0 0 0-.94-.575 6.394 6.394 0 0 0-1.245-.45 4.925 4.925 0 0 0-1.194-.175 110.56 110.56 0 0 1-2.49 4.8c-.44.8-.872 1.567-1.295 2.3-.423.733-.804 1.4-1.143 2-1.83 3.033-3.387 5.275-4.675 6.725-1.287 1.45-2.421 2.275-3.404 2.475-.474-.167-.711-.567-.711-1.2 0-1.533.373-3.183 1.118-4.95a23.24 23.24 0 0 1 2.87-4.975c1.169-1.55 2.473-2.875 3.913-3.975s2.836-1.75 4.191-1.95c-.034-.3-.186-.658-.457-1.075a8.072 8.072 0 0 0-.99-1.225c-.39-.4-.797-.75-1.22-1.05-.424-.3-.805-.5-1.143-.6-1.39.067-2.829.692-4.319 1.875-1.49 1.183-2.87 2.658-4.14 4.425a26.294 26.294 0 0 0-3.126 5.75C26.406 38.117 26 40.083 26 41.95c0 1.733.39 3.158 1.169 4.275.779 1.117 1.795 1.708 3.048 1.775Z"
                  />
                </svg>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Pay for{" "}
                  <span className="text-primary">
                    "{appointment.treatment}"
                  </span>{" "}
                  treatment
                </h3>
              </header>

              <div className="bg-gray-100 text-center px-5 py-6">
                <div className="text-sm mb-6">
                  <strong className="font-semibold">
                    ${appointment.price}
                  </strong>{" "}
                  due {appointment.date}
                </div>

                <Elements stripe={stripePromise}>
                  <CheckoutForm appointment={appointment} />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        x-show="open"
        className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60"
        x-data="{ open: true }"
      ></div>
    </>
  );
};

export default Payment;
