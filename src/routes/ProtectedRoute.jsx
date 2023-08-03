import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../helpers/helpers";
import { ROUTES } from "./routes";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      return navigate(ROUTES.LOGIN);
    }
  }, []);

  return <div>{children}</div>;
};

export default ProtectedRoute;
