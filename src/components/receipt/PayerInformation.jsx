import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../buttons/Button";
import { Plus } from "lucide-react";

const PayerInformation = () => {
  return (
    <div className="flex flex-col space-y-4 text-gray-800">
      <h1 className="text-lg font-medium mb-5">Payer's Information</h1>

      <Select
        value={`Payer's Name`}
        onValueChange={(value) => {
          //   table.setPageSize(Number(value))
        }}
      >
        <SelectTrigger className="h-10 bg-select ">
          {/* <SelectValue placeholder={"Payer's Name"} /> */}
          <p> Payer's Name</p>
        </SelectTrigger>
        <SelectContent side="bottom">
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <h1 className="text-sm font-medium">Payment Method</h1>

      <h4 className="text-xs font-normal">Invoice Balance</h4>

      <h1 className="text-2xl font-bold">USD 0.00</h1>

      <hr />

      <div className="flex flex-col space-y-1">
        <h4 className="text-xs font-normal">Payment Method</h4>
        <h1 className="text-sm font-medium">Payment Reference Number</h1>
      </div>

      <div className="flex flex-col space-y-1">
        <h4 className="text-xs font-normal">Payers Name</h4>
        <h1 className="text-sm font-medium">Payment Purpose</h1>
      </div>

      <div className="flex flex-col space-y-2">
        <Button>Share Payment Details</Button>
        <Button>Add Invoice</Button>
      </div>

      <div className="flex flex-col space-y-3 mt-5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">Saved Invoices</h4>
          <h6 className="text-xs font-normal">View</h6>
        </div>

        <div className="flex items-center justify-between space-x-4">
          <div className="text-center flex flex-col items-center space-y-1">
            <div className="w-10 h-10 border rounded-full grid place-content-center">
              <Plus className="text-gray-800" color="#333" size={18} />
            </div>
            <span className="text-xs font-medium">Add New</span>
          </div>

          <div className="text-center flex flex-col items-center space-y-1">
            <div className="w-10 h-10 border rounded-full grid place-content-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=140&q=80" />
            </div>
            <span className="text-xs font-medium">John Doe</span>
          </div>

          <div className="text-center flex flex-col items-center space-y-1">
            <div className="w-10 h-10 border rounded-full grid place-content-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=140&q=80" />
            </div>
            <span className="text-xs font-medium">Mary Smith</span>
          </div>

          <div className="text-center flex flex-col items-center space-y-1">
            <div className="w-10 h-10 border rounded-full grid place-content-center overflow-hidden">
              <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=140&q=80" />
            </div>
            <span className="text-xs font-medium">David Jones</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerInformation;
