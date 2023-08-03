import TopMenu from "../components/navigation/TopMenu";
import Sidebar from "./Sidebar";

const DashboardWrapper = ({ children }) => {
  return (
    <div className="flex  ">
      <Sidebar />
      <div className="w-5/6 bg-container">
        <TopMenu />
        <div className="p-5 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
