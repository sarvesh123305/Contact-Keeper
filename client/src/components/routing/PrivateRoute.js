import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { Navigate } from "react-router-dom";
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const authContext = useContext(AuthContext);
//   const { isAuthenticated, loading } = authContext;

//   return !isAuthenticated && !loading ? <Navigate to={redirect} /> : element;
// };
const PrivateRoute = ({ redirect, element }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return !isAuthenticated && !loading ? <Navigate to={redirect} /> : element;
};
export default PrivateRoute;
