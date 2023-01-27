// import  { useSelector } from "react-redux";
// import { selectPostIds } from "../features/properties/PropertySlice";
// import PropertiesExcerpt from "./PropertyExcerpts";

import Paginate from "../features/pagination/paginate";
import HomePage from "./HomePage";
import RentalOptions from "./RentalOptions";
import Search from "./Search";
// import { useGetPostsQuery } from '../features/properties/PropertySlice';

const Home = () => {
  return (
    <section className="">
      {/* <Search /> */}
      {/* {content} */}
      <div className="">
        <HomePage />
      </div>

      {/* <Paginate /> */}
    </section>
  );
};
export default Home;
