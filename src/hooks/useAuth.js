import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/slices/authSlice";
import jwt_decode from "jwt-decode";
const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  //const credentials =  useSelector(selectCurrentCredentials)
  let isAdmin = false;
  let isManager = false;
  let isEmployee = false;
  let isAgent = false;
  let status = "Guest";

  if (token) {
    const decoded = jwt_decode(token);

    const { email, roles, userId, avatar } = decoded.UserInfo;
    const username = decoded.UserInfo?.username;

    // console.log(decoded.UserInfo)

    isManager = roles.includes("Manager");
    isEmployee = roles.includes("Employee");
    isAdmin = roles.includes("Admin");

    if (isEmployee) status = "Employee";
    if (isAdmin) status = "Admin";

    return {
      username: username,
      email: email,
      roles: roles,
      id: userId,
      avatar: avatar,
      isManager,
      isAdmin,
      isAgent,
      status,
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
