import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="sidebar bg-teal-600 text-white shadow-md px-3 md:w-40">
      <div className="navbar-start">
        <Link to="/" className="font-bold text-2xl text-white">
          EasyTask
        </Link>
      </div>
      <div className="p-4 flex flex-col gap-4 py-16">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/tasks">Task</Link>
        <Link to="/dashboard/createTask">Create Task</Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
