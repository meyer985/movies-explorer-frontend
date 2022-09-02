import React from "react";
import { Navigate } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function ProtectedRoute({ isLoggedIn, children }) {
  if (isLoggedIn === null) return <Preloader />;

  return isLoggedIn ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
