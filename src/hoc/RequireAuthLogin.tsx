import { Navigate } from "react-router-dom";

type RequireAuthProps = { children: any };

const RequireAuthLogin: React.FC<RequireAuthProps> = ({ children }) => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    return <Navigate to={"/profile"} />;
  }
  return children;
};

export default RequireAuthLogin;
