import { taskTableHeaders } from "../utils/taskTableHeaders";

import { useGetTasksQuery } from "../slices/taskApiSlice";

import { useSelector } from "react-redux";

import { pageInfo } from "../../pagination/paginate";
import TableUtilities from "../../tables/TableUtilities";
import { filterList, sortList } from "../utils/taskTableFilterSort";
import { FaRegCalendarAlt } from "react-icons/fa";

const usersList = () => {
  const pageData = useSelector(pageInfo);

  // const { data } = useGetTasksQuery();
  // console.log(data);

  return (
    <div className="dark:bg-gray-700">
      <section className="">
        <TableUtilities
          fetchData={useGetTasksQuery}
          headers={taskTableHeaders}
          filterList={filterList}
          sortList={sortList}
          tableTitle={`All tasks`}
          searchTitle={`Search all tasks`}
        />
      </section>
    </div>
  );
};

export default usersList;
