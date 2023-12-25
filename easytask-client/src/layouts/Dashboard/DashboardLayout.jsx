import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/shared/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="px-2 md:px-4">
      <DashboardNavbar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
