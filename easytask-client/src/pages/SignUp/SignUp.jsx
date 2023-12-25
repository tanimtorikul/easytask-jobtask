import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../Login/SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password);
    updateUserProfile(data.name).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      toast.success("User created successfully");
      navigate("/");
    });
  };

  return (
    <div className="flex flex-col justify-center md:min-h-[700px] items-center py-4 md:py-0">
      <Helmet>
        <title>Sign Up | GoTrip -Travel Agency</title>
      </Helmet>
      <div className="flex flex-col md:max-w-2xl rounded-md py-2 px-10 bg-white shadow-xl text-gray-900">
        <div className="mb-2 text-center">
          <p className="md:text-xl font-semibold">Sign Up</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-2">
            <div>
              <label htmlFor="name" className="block mb-2 text-lg">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                required
                placeholder="Enter Your Full Name"
                className="w-full px-4 py-3 border rounded-md border-gray-300  text-gray-900"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-lg">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-4 py-3 border rounded-md border-gray-300  text-gray-900"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-lg mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    message: "Password must meet the specified criteria",
                  },
                })}
                name="password"
                autoComplete="new-password"
                required
                placeholder="*******"
                className="w-full px-4 py-3 border rounded-md border-gray-300  text-gray-900"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#E94560] w-full rounded-md py-2 text-white md:text-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-2">
          <div className="flex-1 h-px sm:w-20 bg-gray-700"></div>
          <p className="px-4 md:text-lg text-gray-400">Or Continue With</p>
          <div className="flex-1 h-px sm:w-20 bg-gray-700"></div>
        </div>
        <SocialLogin />
        <p className="px-8 py-2 md:text-lg text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-indigo-600 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
