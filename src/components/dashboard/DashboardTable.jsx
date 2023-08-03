import React from "react";
import SearchInput from "../inputs/SearchInput";
import { DataTable } from "../tables/NewTable/data-table";
import { columns } from "./tableColumns";

const DashboardTable = () => {
  return (
    <div className="mt-10 rounded-lg bg-white p-6 shadow">
      <div className="flex flex-col gap-4">
        <SearchInput />

        <DataTable columns={columns} data={[]} />
      </div>
    </div>
  );
};

export default DashboardTable;
