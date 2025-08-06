import React from "react";
import Login from "./partials/Login";
import ClientOnly from "@/shared/components/Common/ClientOnly";

const LoginPage = () => {
  return (
    <ClientOnly>
      <Login />
    </ClientOnly>
  );
};

export default LoginPage;
