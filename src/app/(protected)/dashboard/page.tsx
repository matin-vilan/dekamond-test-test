import React from "react";
import UsersList from "./partials/UsersList";
import ClientOnly from "@/shared/components/Common/ClientOnly";

const DashboardPage = () => {
  return (
    <ClientOnly>
      <UsersList />
    </ClientOnly>
  );
};

export default DashboardPage;
