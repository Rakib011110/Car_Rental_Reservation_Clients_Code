import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";

interface ProtectedRouteProps {
  component: React.ComponentType;
  roles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  roles,
}) => {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;
