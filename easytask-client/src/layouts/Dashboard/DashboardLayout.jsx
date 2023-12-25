import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/shared/DashboardSidebar";
import DashboardNavbar from "../../components/shared/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <DashboardNavbar />
        <main className="px-2 md:px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;