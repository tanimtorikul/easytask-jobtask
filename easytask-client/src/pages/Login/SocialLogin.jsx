import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
       
          toast.success("Logged in successfully!");
          navigate(location?.state ? location.state : "/");
        
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="p-8">
      <div
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center space-x-4 border m-4 p-3 border-gray-300 rounded cursor-pointer"
      >
        <FcGoogle size={36} />
        <p className="text-lg">Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;