import React from "react";
import DashboardWrapper from "../layouts/DashboardWrapper";
import ProductCard from "../components/products/ProductCard";
import { Button } from "../components/buttons/Button";

const Product = () => {
  return (
    <DashboardWrapper>
      <>
        <div className="py-4 bg-white shadow flex items-center justify-between px-5 ">
          <h1 className="text-lg font-medium">Product Registration</h1>
        </div>

        <div className="grid grid-cols-3 gap-3 place-content-start mt-5">
          <div className="col-span-2 grid grid-cols-2 gap-5">
            {new Array(4).fill(0).map((index) => (
              <ProductCard key={index} />
            ))}
          </div>

          <div className="flex items-center flex-col space-y-3">
            <Button className="w-3/4">Add Product</Button>
            <Button className="w-3/4">Edit</Button>
          </div>
        </div>
      </>
    </DashboardWrapper>
  );
};

export default Product;
