import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/slices/authSlice";
import jwt_decode from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  //const credentials =  useSelector(selectCurrentCredentials)
  let isAdmin = false;
  let isManager = false;
  let isUser = false;
  let isAgent = false;
  let status = "";

  if (token) {
    const decoded = jwt_decode(token);

    const { email, roles, userId, avatar, verified } = decoded.UserInfo;

    const username = decoded.UserInfo?.username;

    // console.log(decoded.UserInfo)

    const userLoggedIn = roles.includes("Tasker") || roles.includes("Customer");
    let canMakeOffer = false;
    if (verified && Object.keys(verified).length > 1) {
      canMakeOffer = Object.keys(verified).every((value) => value === true);
    }

    isManager = roles.includes("Manager");
    isAdmin = roles.includes("Admin");
    if (userLoggedIn) status = "primeUser";
    if (isManager) status = "primeManager";
    if (isAdmin) status = "primeAdmin";

    return {
      username: username,
      email: email,
      roles: roles,
      id: userId,
      avatar: avatar,
      isManager,
      isAdmin,
      status,
      userLoggedIn,
      verified,
      canMakeOffer,
    };
  }
  return {
    username: "",
    roles: [],
    id: "",
    avatar: "",
    isManager,
    isAdmin,
    isAgent,
    status,
  };
};

//TODO :: Remember to pull in the exported object into where it will be needed  -- 6:10

export default useAuth;
