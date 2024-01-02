import React from "react";
import Dashboard from "./dashboard/Dashboard";
import { Helmet } from "react-helmet-async";

const UserDashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Dashboard />
    </>
  );
};

export default UserDashboardPage;
