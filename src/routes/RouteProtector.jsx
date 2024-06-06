import { isEmpty } from "lodash";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RouteProtector = () => {
  const navigate = useNavigate();
  const getToken = () => {
    localStorage.getItem("barantinToken");
  };
  const token = getToken();
  useEffect(() => {
    if (isEmpty(token)) {
      navigate("/login");
    }
  }, [token]);
  return (
    <>
      <Outlet />
    </>
  );
};
export default RouteProtector;
