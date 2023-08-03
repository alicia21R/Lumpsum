import React from "react";
import {
  Wallet,
  Home,
  PieChart,
  Grid,
  HelpCircle,
  SlidersHorizontal,
  LogOut,
} from "lucide-react";
import MyNavLink from "../components/navigation/NavLink";

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-primary text-white px-2 h-screen overflow-hidden relative ">
      <div className="py-5 flex items-center space-x-3">
        <Wallet className="text-secondary" width={24} height={24} />
        <p className="font-bold text-lg">Cashnet</p>
      </div>

      <div className="flex flex-col justify-between  h-[88vh]">
        <ul className="mt-5 space-y-2">
          <MyNavLink to={""} label={"Dashboard"} icon={<Home size={16} />} />
          <MyNavLink
            to={""}
            label={"Accounting"}
            icon={<PieChart size={16} />}
            dropdownItems={[
              {
                label: "Recent Transactions",
                to: "",
              },
              {
                label: "Reports & Statements",
                to: "",
              },
              {
                label: "Invoice",
                to: "",
              },
              {
                label: "Receipts",
                to: "",
              },
            ]}
          />

          <MyNavLink
            to={""}
            label={"General"}
            icon={<Grid size={16} />}
            dropdownItems={[
              {
                label: "Clients",
                to: "",
              },
              {
                label: "Suppliers",
                to: "",
              },
              {
                label: "Products",
                to: "",
              },
            ]}
          />
        </ul>

        <ul className="mt-5 space-y-2 bottom-0">
          <MyNavLink to={""} label={"FAQs"} icon={<HelpCircle size={16} />} />
          <MyNavLink
            to={""}
            label={"Settings"}
            icon={<SlidersHorizontal size={16} />}
          />
          <MyNavLink to={""} label={"Logout"} icon={<LogOut size={16} />} />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
