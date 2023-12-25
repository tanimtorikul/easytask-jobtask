import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="mt-4">
      <button
        type="submit"
        className="bg-[#4285F4] w-full rounded-md py-2 text-white md:text-lg flex items-center justify-center space-x-2"
      >
        <div className="bg-white rounded-full p-1">
        <FcGoogle size={24} />
        </div>
        <span>Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;