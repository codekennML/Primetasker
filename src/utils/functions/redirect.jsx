import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { hideModal } from "../../features/modal/modalSlice";
import { useEffect } from "react";

const useAuthRedirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userLoggedIn: isLoggedIn } = useAuth();

  const redirect = (url, data = null, hasModal = false) => {
    // useEffect(() => {
    if (hasModal) {
      dispatch(hideModal());
    }

    if (isLoggedIn) {
      navigate(url);
    } else {
      navigate("/login", {
        state: {
          redirectUri: url,
          data: data,
        },
      });
    }
    // }, [url, hasModal, data]);
  };

  return redirect;
};

export default useAuthRedirect;
