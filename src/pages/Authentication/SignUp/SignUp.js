import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const SignUp = () => {
  const [signupError, setSignupError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const { signUp, updateUserInfo, user, googleSignIn } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    console.log(errors);
    signUp(data.email, data.password)
      .then((result) => {
        setSignupError("");
        console.log(result.user);
        toast("user created successfully");

        const userInfo = {
          displayName: data.name,
        };
        updateUserInfo(userInfo)
          .then(() => {
            console.log(data.name, data.email, data.type);
            saveUser(data.name, data.email, data.type);
          })
          .catch((err) => console.error(err));
      })

      .catch((err) => {
        console.error(err);
        setSignupError(err.message);
      });
  };

  const saveUser = (name, email, type) => {
    const user = { name, email, type };
    fetch("http://localhost:5000/users-collection", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (user.uid) {
          toast.success("User saved Successfully");
        }
        console.log(data);
        setCreatedUserEmail(email);
      })
      .catch((err) => console.log(err.message));
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
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Your Name</span>
            </label>
            <input
              {...register("name", {
                maxLength: 20,
                required: "Namd field cannot be empty",
              })}
              type="text"
              placeholder="Type your name"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name?.type === "required" && (
              <p className="text-orange-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
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
              <span className="label-text">Select User Type?</span>
            </label>
            <select
              {...register("type", {
                required: "Please enter a valid email address",
              })}
              name="type"
              type="select"
              className="select select-bordered w-full max-w-xs"
            >
              <option selected default>
                visitor
              </option>
              <option>admin</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Password</span>
            </label>
            <input
              {...register("password", {
                minLength: 6,
                required: "Password should be 6 caracter long or more",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: "password must be strong",
                },
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
          <label className="label">
            <span className="label-text">Forgot Password?</span>
          </label>

          <input
            className="btn mt-5 w-full max-w-xs btn-accent"
            value="Sign Up"
            type="submit"
          />
          <label className="label">
            <span className="label-text">
              Already have an accoutn!{" "}
              <Link to="/login" className="text-secondary">
                Login here.
              </Link>
            </span>
          </label>
          {signupError && <p>{signupError}</p>}
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

export default SignUp;
