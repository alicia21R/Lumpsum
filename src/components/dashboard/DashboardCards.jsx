import { ChevronDown, ChevronUp, ChevronsLeft, Inbox } from "lucide-react";
import React from "react";

const DashboardCards = () => {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2 rounded-lg bg-white p-3 shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center  space-x-3">
              <div className="w-20 h-20 rounded-lg border-2 flex items-center justify-center">
                <Inbox size={40} />
              </div>

              <div>
                <h5 className="text-sm font-normal">Total Income</h5>
                <h4 className="text-2xl font-bold">$9,876.33</h4>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <ChevronUp className="cursor-pointer" />
              <span>JUNE</span>
              <ChevronDown className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className=" rounded-lg bg-white p-3 shadow flex items-center flex-col justify-center gap-1">
          <div className="w-10 h-10 rounded-full border-2 grid place-content-center">
            <ChevronsLeft size={25} className="text-gray-300" />
          </div>
          <p className="text-xs font-medium">Total Transactions</p>
          <p className="text-lg font-medium">456</p>
        </div>
        <div className=" rounded-lg bg-white p-3 shadow flex items-center flex-col justify-center gap-1">
          <p className="text-xs font-medium">Transfer</p>
          <p className="text-lg font-medium">+20,850</p>
          <p className="text-xs font-normal">
            +22% <span className="text-sm font-semibold">June/July</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
