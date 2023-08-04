import React from "react";
import DashboardWrapper from "../layouts/DashboardWrapper";
import PayerInformation from "../components/receipt/PayerInformation";
import InvoiceDetails from "../components/receipt/InvoiceDetails";

const Receipts = () => {
  return (
    <DashboardWrapper>
      <>
        <div className="py-4 bg-white shadow flex items-center justify-between px-5 ">
          <h1 className="text-lg font-medium">Receipts</h1>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-4">
          <div>
            <PayerInformation />
          </div>

          <div className="col-span-2">
            <InvoiceDetails />
          </div>
        </div>
      </>
    </DashboardWrapper>
  );
};

export default Receipts;
