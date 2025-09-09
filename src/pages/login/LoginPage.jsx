import React, { useEffect } from "react";
import Login from "../../components/login/Login";

function LoginPage() {
  useEffect(function () {
    document.title = "Login | Furni";
  });
  return <Login />;
}

export default LoginPage;
