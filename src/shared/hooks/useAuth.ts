import { useRouter } from "next/navigation";
import { ACCESS_TOKEN_KEY } from "../constants/tokens";
import { useAppActions } from "../contexts/AppContext";

export const useAuth = () => {
  const router = useRouter();
  const { setAccessToken } = useAppActions();

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setAccessToken("");
    router.push("/login");
  };

  return {
    logout,
  };
};
