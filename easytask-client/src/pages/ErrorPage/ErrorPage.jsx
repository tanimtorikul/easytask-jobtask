import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h2 className="text-xl">This page is under mainteinance</h2>
      <div className="flex gap-6">
        <div>
          <Link>
            <h2 className="text-lg text-teal-600 font-semibold">Previous Page</h2>
          </Link>
        </div>
        <div>
          <Link>
            <h2 className="text-lg text-teal-600 font-semibold">Go Home</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
