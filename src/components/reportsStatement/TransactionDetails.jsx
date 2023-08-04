import { ArrowLeft, ListX } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../buttons/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const TransactionDetails = () => {
  return (
    <div className="grid grid-cols-2 place-content-between gap-5 text-gray-800 py-5 shadow p-4 rounded mt-4">
      <div className="flex flex-col space-y-3 text-gray-800">
        <p>
          <ArrowLeft />
        </p>
        <h1 className="text-lg font-medium">Transaction in Date Range</h1>

        <div className="grid gap-2">
          <div className="grid gap-3">
            <label className="text-sm font-normal">Filter by Account</label>
            <Input />
          </div>

          <div className="grid gap-3">
            <label className="text-sm font-normal">
              You've Spent This Month
            </label>
            <Input />
          </div>

          <div className="grid gap-3 mt-8">
            <Input />
          </div>

          <div className="grid gap-3 mb-5">
            <div className="flex items-center space-x-3">
              <input type="checkbox" />
              <span className="text-sm font-normal">
                Exclude Opening Balances
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <input type="checkbox" />
              <span className="text-sm font-normal">Download as .csv file</span>
            </div>
          </div>

          <Button>Generate</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 place-content-start">
        <Select
          value={`Payer's Name`}
          onValueChange={(value) => {
            //   table.setPageSize(Number(value))
          }}
        >
          <SelectTrigger className="h-10 bg-select w-full ">
            {/* <SelectValue placeholder="Payer's Name" /> */}
            <p className="text-sm font-normal">Search Transactions</p>
          </SelectTrigger>
          <SelectContent side="bottom">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={`Payer's Name`}
          onValueChange={(value) => {
            //   table.setPageSize(Number(value))
          }}
        >
          <SelectTrigger className="h-10 bg-select w-full ">
            {/* <SelectValue placeholder={"Payer's Name"} /> */}

            <p className="text-sm font-normal">Report Format</p>
          </SelectTrigger>
          <SelectContent side="bottom">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div></div>
        <div></div>

        <div></div>
        <div></div>

        <div className="shadow bg-white px-5 py-3 rounded-md flex items-center space-x-5">
          <ListX color="#999" size={30} />
          <p className="font-medium text-gray-700 text-md">Profit and Loss</p>
        </div>

        <div className="shadow bg-white px-5 py-3 rounded-md flex items-center space-x-5">
          <ListX color="#999" size={30} />
          <p className="font-medium text-gray-700 text-md">Income</p>
        </div>

        <div className="shadow bg-white px-5 py-3 rounded-md flex items-center space-x-5">
          <ListX color="#999" size={30} />
          <p className="font-medium text-gray-700 text-md">Balance sheet</p>
        </div>

        <div className="shadow bg-white px-5 py-3 rounded-md flex items-center space-x-5">
          <ListX color="#999" size={30} />
          <p className="font-medium text-gray-700 text-md">Assets</p>
        </div>

        <div className="shadow bg-white px-5 py-3 rounded-md flex items-center space-x-5">
          <ListX color="#999" size={30} />
          <p className="font-medium text-gray-700 text-md">Revenue</p>
        </div>

        <div className="shadow bg-white px-5 py-3 rounded-md flex items-center space-x-5">
          <ListX color="#999" size={30} />
          <p className="font-medium text-gray-700 text-md">Income</p>
        </div>

        <div className="shadow bg-white px-5 py-3 rounded-md flex items-center space-x-5">
          <ListX color="#999" size={30} />
          <p className="font-medium text-gray-700 text-md">Cash Flow</p>
        </div>

        <div className="shadow bg-white px-5 py-3 rounded-md flex items-center space-x-5">
          <ListX color="#999" size={30} />
          <p className="font-medium text-gray-700 text-md">Liabilities</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
