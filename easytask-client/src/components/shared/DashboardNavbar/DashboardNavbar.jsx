import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const DashboardNavbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 border-b border-gray-300 py-6">
      <div className="navbar-start">
        <Link to="/" className="text-[#395CA7] font-bold text-2xl">
          EasyTask
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {user ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt={user.email} src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user.displayName}</a>
                </li>
                <li>
                  <a className="justify-between">{user.email}</a>
                </li>
                <li>
                  <button onClick={handleLogOut}>
                    <a>Logout</a>
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <Link to="/login" className=" text-lg">
              <FaUserCircle size={36} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
