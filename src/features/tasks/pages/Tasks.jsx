import { taskTableHeaders } from "../utils/taskTableHeaders";

import { useGetTasksQuery } from "../slices/taskApiSlice";

import { useSelector } from "react-redux";

import { pageInfo } from "../../pagination/paginate";
import BasicTable from "../../tables/BasicTable";
import { filterList, sortList } from "../utils/taskTableFilterSort";

const usersList = () => {
  const pageData = useSelector(pageInfo);

  const { data } = useGetTasksQuery();
  console.log(data);

  return (
    <div className="">
      <div className="mb-6">
        <h2 className=""> All Tasks</h2>
      </div>
      <div>
        <BasicTable
          fetchTableData={useGetTasksQuery}
          headers={taskTableHeaders}
          filterList={filterList}
          sortList={sortList}
          pageData={pageData}
        />
      </div>
    </div>
  );
};

export default usersList;
