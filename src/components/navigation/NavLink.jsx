import { ChevronUp } from "lucide-react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MyNavLink = ({ icon, label, to, dropdownItems = [] }) => {
  const location = useLocation();
  return dropdownItems.length == 0 ? (
    <li
      className={`hover:bg-secondary transition-all rounded-md ${
        location.pathname === to ? "bg-secondary" : ""
      }`}
    >
      <NavLink
        className="flex items-center space-x-3 px-2 py-1 font-normal text-sm"
        to={to}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </NavLink>
    </li>
  ) : (
    <li className="">
      <NavLink
        className="flex items-center justify-between px-2 py-1 font-normal text-sm"
        to={to}
      >
        <div className="flex items-center space-x-3">
          <span>{icon}</span>
          <span>{label}</span>
        </div>
        <ChevronUp />
      </NavLink>

      <ul className="ml-8 mt-1">
        {dropdownItems.map((item, index) => (
          <li
            key={index}
            className={`hover:bg-secondary transition-all rounded-md px-2 py-1 ${
              location.pathname === item.to ? "bg-secondary" : ""
            }`}
          >
            <NavLink className="text-xs font-normal" to={item.to}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MyNavLink;
