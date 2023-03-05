import { Navigate } from "react-router-dom";

type RequireAuthProps = { children: any };

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const auth = localStorage.getItem("auth");
  if (!auth) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default RequireAuth;
