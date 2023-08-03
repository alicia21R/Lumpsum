import React from "react";
import { Button } from "../buttons/Button";
import { Bell, ChevronDown, MessageSquare } from "lucide-react";

const TopMenu = () => {
  return (
    <div className="py-4 bg-white shadow flex items-center justify-between px-5">
      <div className="flex space-x-2 items-center ">
        {/* buttons */}
        <Button variant={"default"} size={"sm"} className="px-5">
          Add Client
        </Button>
        <Button variant={"default"} size={"sm"} className="px-5">
          Create Invoice
        </Button>
        <Button variant={"default"} size={"sm"} className="px-5">
          Make Payment
        </Button>
        <Button variant={"default"} size={"sm"} className="px-5">
          Make Receipt
        </Button>
      </div>

      <div className="flex space-x-4 items-center">
        <div className="relative">
          <MessageSquare />
          <p className="w-4 h-4 grid place-content-center text-xs font-normal rounded-full absolute -top-1 -right-1 bg-red-600 text-white">
            8
          </p>
        </div>

        <div className="relative">
          <Bell />
          <p className="w-4 h-4 grid place-content-center text-xs font-normal rounded-full absolute -top-1 -right-1 bg-red-600 text-white">
            5
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full border ">
            <img
              src="https://images.pexels.com/photos/3444087/pexels-photo-3444087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-full rounded-full "
            />
          </div>

          <span className="font-bold text-xs">Alicia</span>

          <ChevronDown size={14} />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
