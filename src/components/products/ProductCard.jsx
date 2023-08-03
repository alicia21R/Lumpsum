import React from "react";
import { Layers, MessageCircle, MoreHorizontal, Tag } from "lucide-react";
import { Button } from "../buttons/Button";

const ProductCard = () => {
  return (
    <div className="py-4 bg-white shadow-md rounded-sm flex  flex-col justify-between px-5 gap-10">
      <div className="flex items-center justify-between w-full">
        <div className="text-gray-800 flex flex-col space-y-2">
          <h4 className="text-lg font-medium ">Cashnet</h4>
          <p className="text-sm font-normal">ID F22</p>

          <p className="flex items-center space-x-2 text-xs font-normal">
            <Layers size={18} />
            <span>Accounting System</span>
          </p>

          <p className="flex items-center space-x-2 text-xs font-normal">
            <Tag size={18} />
            <span>Accounting System</span>
          </p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          <Button size={"sm"} className="py-1 px-3">
            Edit
          </Button>

          <div className="w-20 h-20 rounded-lg p-1">
            <img
              src="https://images.pexels.com/photos/3444087/pexels-photo-3444087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center w-8 h-8 -mx-2 overflow-hidden rounded-full border-2 border-white">
              <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=140&q=80" />
            </div>

            <div className="flex items-center justify-center w-8 h-8 -mx-2 overflow-hidden rounded-full border-2 border-white">
              <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=140&q=80" />
            </div>

            <div className="flex items-center justify-center w-8 h-8 -mx-2 overflow-hidden rounded-full border-2 border-white">
              <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=140&q=80" />
            </div>

            <div className="flex items-center justify-center w-8 h-8 -mx-2 overflow-hidden rounded-full border-2 border-white">
              <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
            </div>
          </div>

          <p className="text-sm text-gray-800 font-normal">770</p>
        </div>
        <div className="flex items-center space-x-4 text-gray-800">
          <p className="relative">
            <span>+55</span>
          </p>
          <p>25%</p>
        </div>
        <div className="flex items-center space-x-2">
          <MoreHorizontal className="text-gray-800" />
          <MessageCircle className="text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
