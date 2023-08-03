import React from "react";
import SearchInput from "../inputs/SearchInput";

const DashboardTable = () => {
  return (
    <div className="mt-10 rounded-lg bg-white p-6 shadow">
      <div>
        <SearchInput />
        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Product</th>
              <th>Status</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Balance</th>
              <th>Date</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
