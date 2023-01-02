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
    <div className="w-full max-w-screen-full  mx-auto px-6 ">
      <section className=" h-16 ">
        <div className="flex flex-row space-x-1 items-center py-4 px-4">
          <p className="text-2xl bg-indigo-800 text-white p-1.5 rounded pr-1.5">
            <FaUserFriends />
          </p>
          <h2 className="text-2xl text-indigo-800 font-bold">Users</h2>
        </div>
        <div>
          <DescCards Data={`User`} />
        </div>

        <div className="mt-6">{/* <TabComponent TabList={tabList} /> */}</div>

        <AllUsers />
      </section>
    </div>
  );
};

export default Users;
