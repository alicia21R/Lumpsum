import React from "react";
import DashboardWrapper from "../layouts/DashboardWrapper";
import DashboardTop from "../components/dashboard/DashboardTop";
import DashboardTable from "../components/dashboard/DashboardTable";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <>
        <DashboardTop />
        <DashboardTable />
      </>
    </DashboardWrapper>
  );
};

export default Dashboard;
