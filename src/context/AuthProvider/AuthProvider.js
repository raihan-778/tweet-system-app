import { createContext } from "react";
import { app } from "../../firebase/firebase.config";
import { getAuth } from "firebase/auth";

import React from "react";
import App from "../../App";
const AuthContext = createContext();
const auth = getAuth(App);

const AuthProvider = ({ children }) => {
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
