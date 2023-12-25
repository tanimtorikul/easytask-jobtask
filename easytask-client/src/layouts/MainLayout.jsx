import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
