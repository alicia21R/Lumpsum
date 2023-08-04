import React from "react";
import DashboardWrapper from "../layouts/DashboardWrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import TopCard from "../components/reportsStatement/TopCard";
import TransactionDetails from "../components/reportsStatement/TransactionDetails";

const ReportsStatement = () => {
  return (
    <DashboardWrapper>
      <>
        <div className="flex items-center justify-between px-5 ">
          <h1 className="text-lg font-medium">Reports & Statement</h1>

          <Select
            value={`Payer's Name`}
            onValueChange={(value) => {
              //   table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-10 bg-select w-fit ">
              {/* <SelectValue placeholder={"Payer's Name"} /> */}

              <p className="text-sm font-normal">This Week's balance</p>
            </SelectTrigger>
            <SelectContent side="bottom">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <TopCard />
        <TransactionDetails />
      </>
    </DashboardWrapper>
  );
};

export default ReportsStatement;
