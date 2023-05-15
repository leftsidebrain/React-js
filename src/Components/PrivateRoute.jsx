import React from "react";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const login = false;
  return login ? <Outlet /> : alert("Anda Belum Login");
}
