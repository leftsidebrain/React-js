import React from "react";
import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function PrivateRoute() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  return globalState.isLogin ? <Outlet /> : <Navigate to="/login" />;
}
