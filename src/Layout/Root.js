import React from "react";
import { Outlet } from "react-router-dom";
import Loader from "../pages/shared/Loader/Loader";
import NavBar from "../pages/shared/NavBar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Loader></Loader>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
