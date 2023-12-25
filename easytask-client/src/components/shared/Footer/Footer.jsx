import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-800 px-4 sm:px-8 py-6 md:py-12 border-t border-gray-300">
      <div className="container mx-auto flex flex-col lg:flex-row md:justify-between md:items-center">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <Link
            to="/"
            className="flex md:justify-center space-x-3 lg:justify-start"
          >
            <span className="self-center text-3xl font-semibold text-black">
              EasyTask
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-2/3 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-lg text-black">
              Features
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/tasks">Task Management</Link>
              </li>
              <li>
                <Link to="/calendar">Event Calendar</Link>
              </li>
              <li>
                <Link to="/teams">Collaboration</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-lg text-black">
              Support
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/help">Help Center</Link>
              </li>
              <li>
                <Link to="/contact">Contact Support</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-lg text-black">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-lg text-black">Connect</div>
            <div className="flex justify-start space-x-3">
              <Link
                to="#"
                title="Facebook"
                className="flex text-xl items-center p-1"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                title="Twitter"
                className="flex text-xl items-center p-1"
              >
                <FaTwitter />
              </Link>
              <Link
                to="#"
                title="Instagram"
                className="flex text-xl items-center p-1"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 text-lg text-center text-black">
        © 2023 EasyTask. Developed by Tanim.
      </div>
    </footer>
  );
};

export default Footer;
