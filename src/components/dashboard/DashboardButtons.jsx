import React from "react";
import { Button } from "../buttons/Button";

const DashboardButtons = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between space-x-4">
        <Button variant="outline">Generate Receipt</Button>
        <Button variant="outline">Generate Invoice</Button>
        <Button variant="outline">Add Billing</Button>

        <div className="bg-primary flex items-center space-x-2 p-1 rounded">
          <p className="bg-tertiary py-1 rounded-md px-2 text-sm font-medium">
            Full Payment
          </p>
          <p className=" text-white py-1 rounded-md px-2 text-sm font-medium">
            Full Payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardButtons;
