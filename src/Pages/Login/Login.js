import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
import Loading from "../Shared/Loading";
import EmailVerification from "./EmailVerification";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(user || googleUser); //ok....75-3
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  let signInError;
  if (error || googleError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || googleError?.message}</small>
      </p>
    );
  }

  if (googleLoading || loading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-3xl font-medium">Login</h1>
        <p className="text-slate-500">Hi, Welcome back 👋</p>
        <div className="my-5">
          <button
            onClick={() => signInWithGoogle()}
            className="w-full text-center py-2 my-3 border flex space-x-2 items-center justify-center border-accent rounded-lg text-accent hover:border-accent hover:text-white hover:shadow transition duration-150 hover:bg-accent "
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-6 h-6"
              alt=""
            />
            <span>Continue with Google</span>
          </button>
        </div>
        <div className="divider">OR</div>
        <form onSubmit={handleSubmit(onSubmit)} className="my-2">
          <div className="flex flex-col space-y-3">
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
                    message: "Email is Required",
                  },
                  pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide Your Valid Email",
                })}
              />
            </label>

            {/* password field */}
            <label htmlFor="password">
              <p className="font-medium text-slate-700 pb-2">Password</p>
              {errors.password?.type === "required" && (
                <span className="label-text-alt font-medium text-red-500 pb-2">
                  {errors.password.message}
                </span>
              )}

              {errors.password?.type === "minLength" && (
                <span className="label-text-alt font-medium text-red-500 pb-2">
                  {errors.password.message}
                </span>
              )}
              <input
                name="password"
                type="password"
                className="w-full  py-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
            </label>

            {/* <div className="flex flex-row justify-between">
              <div>
                <label htmlFor="remember" className>
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 border-slate-200 focus:bg-accent"
                  />
                  Remember me
                </label>
              </div>
              <div>
                <a href="#j" className="font-medium text-primary">
                  Forgot Password?
                </a>
              </div>
            </div> */}

            {signInError}
            <input
              className=" btn w-full py-2  text-white bg-accent hover:bg-accent rounded-lg border-accent hover:shadow inline-flex space-x-2 items-center justify-center"
              value="LOGIN"
              type="submit"
            ></input>

            <p className="text-center">
              New to Doctors Portal?
              <Link
                to="/signup"
                className="text-primary font-medium inline-flex space-x-1 items-center"
              >
                <span>Create new account</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <EmailVerification />
    </>
  );
};

export default Login;
