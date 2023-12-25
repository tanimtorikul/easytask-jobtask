import { useContext } from "react";
import { AuthContect } from "../Providers/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContect);
  return auth;
};

export default useAuth;
