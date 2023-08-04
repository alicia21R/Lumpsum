import { CreditCard, LineChart, ShoppingCartIcon, Users } from "lucide-react";
import React from "react";

const TopCard = () => {
  return (
    <div className="grid grid-cols-4 place-content-between gap-5 text-gray-800 py-5 shadow p-4 rounded mt-4">
      <div className="flex flex-col space-y-3">
        <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-white">
          <LineChart color="#999" />
        </div>
        <p className="text-sm font-normal">Income</p>
        <p className="text-4xl font-normal">489000/=</p>

        <div className="px-6 py-1 bg-select rounded-xl text-xs font-normal w-fit ">
          <p>+28.4% Change</p>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-white">
          <ShoppingCartIcon color="#999" />
        </div>
        <p className="text-sm font-normal">Expenses</p>
        <p className="text-4xl font-normal">1260000/=</p>

        <div className="px-6 py-1 bg-select rounded-xl text-xs font-normal w-fit ">
          <p>+28.4% Change</p>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-white">
          <CreditCard color="#999" />
        </div>
        <p className="text-sm font-normal">Account balance</p>
        <p className="text-4xl font-normal">3490000/=</p>

        <div className="px-6 py-1 bg-select rounded-xl text-xs font-normal w-fit ">
          <p>-9.5% Change</p>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-white">
          <Users color="#999" />
        </div>
        <p className="text-sm font-normal">Total Users</p>
        <p className="text-4xl font-normal">790</p>

        <div className="px-6 py-1 bg-select rounded-xl text-xs font-normal w-fit ">
          <p>+28.4% Change</p>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
