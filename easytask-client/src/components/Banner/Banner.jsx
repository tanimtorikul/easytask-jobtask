import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero md:min-h-[700px] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-gradient-to-r bg-opacity-50"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-5xl font-extrabold leading-tight">
            Transform Your Workflow with Precision
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Elevate your productivity with our cutting-edge task management
            solution. Seamlessly organize, prioritize, and collaborate to
            achieve unparalleled efficiency.
          </p>
          <Link
            to="/dashboard/createtask"
            className="btn bg-white text-blue-900 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-full transition duration-300 ease-in-out"
          >
            Let's Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
