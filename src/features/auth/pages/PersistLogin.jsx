import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRefreshTokenMutation } from "../slices/authApiSlice";
import usePersist from "../../../hooks/PersistLogin";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../slices/authSlice";

const PersistLogin = () => {
  const navigate = useNavigate();
  const [persist] = usePersist();
  const location = useLocation();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [credSent, setCredSent] = useState(false);

  const [
    refreshToken,
    { isUninitialized, isLoading, isSuccess, isError, error },
  ] = useRefreshTokenMutation();

  const verifyRefreshToken = async () => {
    // console.log('verifying refresh token')
    try {
      //const response =
      await refreshToken();
      //const { accessToken } = response.data
      setCredSent(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      // React 18 Strict Mode
      if (!token && persist) verifyRefreshToken();
    }

    return () => (effectRan.current = true);

    // eslint-disable-next-line
  }, []);

  // let content;

  // if (!persist) {
  //   // persist: no
  //   content = <Outlet />;
  // } else if (isLoading) {
  //   //persist: yes, token: no

  //   content = <p>Loading...</p>;
  // } else if (isError) {
  //   //persist: yes, token: no

  //   navigate("/login", { state: { from: location }, replace: true });
  //   // <Navigate to = "/login" state ={{from : location}} replace / >
  //   // );
  // } else if (isSuccess && credSent) {
  //   //persist: yes, token: yes
  //   // console.log("success");
  //   content = <Outlet />;
  // } else if (token && isUninitialized) {
  //   //persist: yes, token: yes
  //   // console.log("token and uninit");

  //   content = <Outlet />;
  // }

  return <Outlet />;
};
export default PersistLogin;
