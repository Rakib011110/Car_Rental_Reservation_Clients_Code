import { RootState } from "@reduxjs/toolkit/query";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;
