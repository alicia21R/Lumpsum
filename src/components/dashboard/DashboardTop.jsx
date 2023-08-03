import React from "react";
import DashboardCards from "./DashboardCards";
import DashboardButtons from "./DashboardButtons";

const DashboardTop = () => {
  return (
    <div>
      <h4 className="font-medium text-lg text-gray-600">Receipts</h4>
      <DashboardCards />
      <DashboardButtons />
    </div>
  );
};

export default DashboardTop;
