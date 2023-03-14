import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
  const [signInError, setSignInError] = useState("");

  const { signIn, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignIn = (data) => {
    console.log(data);
    console.log(errors);
    signIn(data.email, data.password)
      .then((result) => {
        setSignInError("");
        console.log(result.user);
        toast("user SignIn successfully").catch((err) => console.error(err));
      })

      .catch((err) => {
        console.error(err);
        setSignInError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="flex bg-[#0A2647] mx-auto my-5 h-[800px] justify-center  items-center">
      <div>
        <h2 className="text-xl  font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input
              {...register("email", {
                required: "Please enter a valid email address",
              })}
              type="email"
              placeholder="Type here"
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-orange-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Password</span>
            </label>
            <input
              {...register("password", {
                minLength: 6,
                required: "Password should be 6 caracter long or more",
              })}
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {errors.password && (
            <p className="text-orange-600" role="alert">
              {errors.password?.message}
            </p>
          )}

          <input
            className="btn mt-5 w-full max-w-xs btn-accent"
            value="Sign Up"
            type="submit"
          />
          <label className="label">
            <span className="label-text">
              Don't have an accoutn!{" "}
              <Link to="/signup" className="text-secondary">
                Please Sign Up here.
              </Link>
            </span>
          </label>
          {signInError && <p>{signInError}</p>}
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
