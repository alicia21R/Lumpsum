import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { ChevronDown, Share2, Share2Icon } from "lucide-react";
import { Button } from "../buttons/Button";

const InvoiceDetails = () => {
  return (
    <div className="flex flex-col space-y-3 text-gray-800">
      <h1 className="text-lg font-medium">Invoice Details</h1>

      <div className="flex items-center space-x-4">
        <div>
          <label className="text-sm font-normal">Payment Method</label>
          <Select
            value={`Payer's Name`}
            onValueChange={(value) => {
              //   table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-10 bg-select w-40">
              {/* <SelectValue placeholder={"Payer's Name"} /> */}
              <p>Cash</p>
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

        <div>
          <label className="text-sm font-normal">Invoice Number</label>
          <Select
            value={`Payer's Name`}
            onValueChange={(value) => {
              //   table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-10 bg-select w-40">
              {/* <SelectValue placeholder={"Payer's Name"} /> */}
              <p>Invoice No</p>
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
      </div>

      <div className="flex flex-col space-y-4">
        <h4 className="text-md font-normal">Order Status</h4>
        <Input className="bg-white" placeholder="Invoice Amount*" />
        <Input className="bg-white" placeholder="Payment Amount*" />
        <Input className="bg-white" placeholder="Payment Due Date*" />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between  ">
          <h4 className="text-md font-normal">Payment Method</h4>
          <p className="">
            <ChevronDown className="p-0" color="#333" size={19} />
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input className="bg-white" placeholder="Product" />
          <Input className="bg-white" placeholder="Payer's Email" />
          <Input className="bg-white" placeholder="Payer's Phone Number" />
          <Input className="bg-white" placeholder="Invoice Reference Number" />
          <Input
            className="bg-white col-span-2"
            placeholder="Additional Information For Payer"
          />
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 flex items-center justify-center rounded bg-red-600">
            <Share2Icon color="white" size={14} />
          </div>
          <p className="text-sm font-normal">Email Receipt</p>
          <input type="checkbox" />
        </div>

        <Button variant="secondary">Generate</Button>
      </div>
    </div>
  );
};

export default InvoiceDetails;
