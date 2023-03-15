import React, { useContext, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const [logOutErr, setLogOutErr] = useState("");

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 392) {
      setFix(true);
    }
    setFix(false);
  };

  window.addEventListener("scroll", setFixed);
  const handleSignOut = () => {
    console.log("logout clicked");
    logOut()
      .then(() => {
        console.log(user);
        user && setUser("");
        toast.success("User logout successfully");

        setLogOutErr("");
      })
      .catch((err) => {
        console.error(err.message);
        setLogOutErr(err.message);
      });
  };

  return (
    <>
      <Zoom duration={2000}>
        <div className={fix && `fixed`}>
          <div className={"navbar bg-[#ECECEC] shadow-xl text-cyan-400"}>
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact bg-[#ECECEC] dropdown-content mt-3 p-2 shadow text-slate-600 rounded-box w-52"
                >
                  <button className="btn-sm btn-outline btn-accent my-2 rounded-lg ">
                    <Link to="/">Home</Link>
                  </button>
                  <button className="btn-sm btn-outline btn-accent my-2 rounded-lg ">
                    <Link to="/login">Log In</Link>
                  </button>
                  <button className="btn-sm btn-outline btn-accent my-2 rounded-lg ">
                    <Link to="/blog">Blog</Link>
                  </button>
                </ul>
              </div>
              <div className="avatar online placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <img
                    src="https://i.ibb.co/zQBx7d9/Tweeting.png"
                    alt="Tweeting"
                    border="0"
                  />
                </div>
              </div>
              <Link
                to="/"
                className="btn btn-ghost normal-case font-semibold text-2xl"
              >
                TSA
                <sub className="text-green-500">
                  <small>Tweeting System App</small>
                </sub>
              </Link>
            </div>
            <div className="navbar-center  hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                <li>
                  <button className="btn-sm btn-outline btn-accent mx-2 rounded-lg ">
                    <Link to="/">Home</Link>
                  </button>
                </li>
                <li>
                  <button className="btn-sm btn-outline btn-accent my-2 rounded-lg ">
                    <Link to="/login">Log In</Link>
                  </button>
                </li>

                <li>
                  <button className="btn-sm btn-outline btn-accent mx-2 rounded-lg ">
                    <Link to="/blog">Blog</Link>
                  </button>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              {user?.email && (
                <>
                  <div className="badge badge-outline">{user?.email}</div>
                  <button onClick={handleSignOut} className="btn">
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default NavBar;
