import {
  FaDownload,
  FaFilter,
  FaGlobe,
  FaLayerGroup,
  FaUserFriends,
} from "react-icons/fa";
// import { tabList } from "../../../utils/tabArray";
import { lazy } from "react";
import AllUsers from "../../../features/users/pages/Users";
import DescCards from "../../../utils/DescCards";
import TabComponent from "../../../utils/TabComponents";
import BasicTable from "../../../features/tables/BasicTable";

const Users = () => {
  return (
    <div className="w-full max-w-screen-full  mx-auto  ">
      <AllUsers />
    </div>
  );
};

export default Users;
