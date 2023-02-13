import { useTable, usePagination, useRowSelect } from "react-table";
import {
  useMemo,
  useState,
  useEffect,
  Fragment,
  forwardRef,
  useRef,
} from "react";
import {
  AiOutlineCloudDownload,
  AiOutlineUserAdd,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiSortDescending,
} from "react-icons/hi";
import { HiChevronUpDown } from "react-icons/hi2";
import { MdFilterList } from "react-icons/md";
// import { openModal } from "../modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import GeneralModal from "../modal/GeneralModal";
import EditUser from "../users/pages/EditUser";
import { FaRegEdit, FaRegTrashAlt, FaSearch } from "react-icons/fa";
import DeleteUser from "../users/pages/DeleteUser";
import ModalContent from "../modal/ModalContent";
import { Formik, Form } from "formik";
import CustomText from "../../utils/CustomFieldComp/CustomText";
import TableUtilities from "./TableUtilities";
import { CSVLink } from "react-csv";
import { Listbox, Transition } from "@headlessui/react";
import Spinner from "../../utils/Spinner";

import { pageInfo } from "../pagination/paginate";

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input
        type="checkbox"
        className="w-4 h-6 accent-violet-500"
        ref={resolvedRef}
        {...rest}
      />
    </>
  );
});

const TableData = ({ fetchData, headers, params }) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const {
    data: tableData,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = fetchData({
    page: page,
    ...params,
  });
  let tableContent = [];
  useEffect(() => {
    if (isSuccess) {
      const { ids, entities } = tableData;
      const entitiesMap = ids.map((id) => entities[id]);
      setData([...entitiesMap]);
    }
  }, [tableData]);

  return (
    // <div>Hello World</div>
    <Table
      dataForTable={data}
      headers={headers}
      setPageIndex={setPage}
      isLoading={isLoading}
      isError={isError}
      isFetching={isFetching}
      error={error}
    />
  );
};

const Table = ({
  dataForTable,
  headers,
  isLoading,
  isFetching,
  isError,
  error,
  setPageIndex,
}) => {
  const [userId, setUserId] = useState();
  const pageData = useSelector(pageInfo);
  const modalStatus = useSelector((state) => state.modal.openModalStatus);

  //>>>>>>>>>>>>>>>>>>>> Display the component >>>>>>>>>>>>>>>>>>>>>///

  const [clicked, setClicked] = useState({
    edit: false,
    delete: false,
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    setClicked((prev) => ({
      ...prev,
      delete: true,
      edit: false,
    }));

    setUserId(id);

    dispatch(openModal());
  };

  const handleEdit = (id) => {
    setClicked((prev) => ({
      ...prev,
      edit: true,
      delete: false,
      create: false,
    }));
    setUserId(id);
    dispatch(openModal());
  };

  let content;
  //EDIT USER ON CLICK
  if (modalStatus && clicked.edit) {
    content = (
      <GeneralModal>
        <EditUser userId={userId} />
      </GeneralModal>
    );
    // DELETE USER ON CLICK
  } else if (modalStatus && clicked.delete) {
    content = (
      <GeneralModal>
        <DeleteUser userId={userId} />
      </GeneralModal>
    );
  } else {
    content = "";
  }

  //Table Data MUST  be an array

  const columns = useMemo(() => headers, []);
  const data = useMemo(() => dataForTable, [dataForTable]);

  const tablehooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      {
        id: "selection",
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </div>
        ),
      },
      ...columns,
      {
        id: "actions",
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="space-x-2 flex">
            <button
              onClick={() => handleEdit(row.values.id)}
              className="text-gray-600 border text-lg border-violet-400 rounded px-2 py-1 hover:bg-violet-100"
            >
              <FaRegEdit className="text-violet-600" />
            </button>
            <button
              onClick={() => handleDelete(row.values.id)}
              className="text-gray-600 border border-rose-400 text-lg rounded px-2 py-1 hover:bg-rose-100"
            >
              <FaRegTrashAlt className="text-red-600" />
            </button>
          </div>
        ),
      },
    ]);
  };

  const {
    getTableProps,
    getTableBodyProps,
    page,
    prepareRow,
    headerGroups,
    canPreviousPage,
    canNextPage,
    pageCount,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      manualPagination: true,
      initialState: {
        pageIndex: 0,
      },
      pageCount: pageData.pages,
    },
    usePagination,
    useRowSelect,
    tablehooks
  );

  //Create callback for updating page index in getPageData

  useEffect(() => {
    setPageIndex(pageIndex + 1);
  }, [pageIndex]);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Set the Data to be displayed into the tableData Array>>>>>>>//

  let tableContent;

  if (isLoading || isFetching) {
    tableContent = (
      <tr className="absolute left-2/4 space-y-4 mt-32">
        <td>
          <Spinner height={60} width={60} visible={true} color="#b09cd7" />
        </td>
      </tr>
    );
  } else if (isError) {
    tableContent = (
      <tr className="absolute left-1/3 space-y-4 mt-4">
        <td>
          <p>{error?.data?.message}</p>
          <button
            onClick={() => onSubmit("")}
            className="mr-4 mt-12 flex values-center bg-indigo-700 text-center  py-1.5 px-6 ml-2 text-[15px] font-medium text-white  rounded-lg  hover:bg-indigo-800  focus:outline-none  dark:bg-violet-600 dark:hover:bg-violet-700 dark:text-white"
          >
            Reset
          </button>
        </td>
      </tr>
    );
  } else {
    tableContent = page.map((row, i) => {
      prepareRow(row);
      return (
        <tr
          {...row.getRowProps()}
          className={`${
            !row.isSelected ? "transparent" : "bg-purple-100"
          } text-gray-600 hover:bg-purple-50 hover:cursor-pointer  dark:hover:bg-gray-700 dark:text-gray-100`}
        >
          {row.cells.map((cell) => {
            return (
              <td {...cell.getCellProps()} className="text-ellipsis">
                {cell.render("Cell")}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  return (
    <div className=" max-w-full overflow-x-hidden mb-5 ">
      <section className=" antialiased  text-gray-600   ">
        <div className="h-full ">
          <div className="w-full  mx-auto bg-white dark:bg-gray-800 border border-t-0 border-gray-100  max-w-full  dark:border-none">
            <div className="p-3 pt-0 dark:bg-gray-800">
              <div className="overflow-x-auto  lg:max-w-screen-lg xl:max-w-[calc(80vw)] xl:w-full  min-h-[500px] scrollbar-hide ">
                <table
                  {...getTableProps()}
                  className="relative text-[12px] font-medium table-auto text-gray-700 whitespace-nowrap border-collapse w-full min-w-full dark:bg-gray-800 dark:border-collapse dark:text-gray-400"
                >
                  <thead className=" dark:bg-gray-800 text-purple-700">
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()} className="">
                        {headerGroup.headers.map((column) => (
                          <th {...column.getHeaderProps()}>
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()} className="text-left">
                    {tableContent}
                  </tbody>
                </table>
              </div>
              <div
                className={`${
                  isLoading || isError
                    ? "hidden opacity-0"
                    : "visible opacity-100"
                } pagination bar flex justify-between values-center pt-2`}
              >
                <button
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  className=" inline-flex items-center space-x-1 values-center disabled:bg-indigo-50 disabled:cursor-not-allowed bg-purple-700  text-white hover:bg-purple-700 px-3 py-1.5 font-medium rounded-lg"
                >
                  <span>
                    <HiArrowNarrowLeft />
                  </span>
                  <span>Previous</span>
                </button>

                <div>
                  <p className="text-gray-600">{`Showing Page ${
                    pageIndex + 1
                  } of ${pageCount} ~  ${pageData.totalDocs} entries`}</p>
                  <p></p>
                </div>

                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className=" items-center  inline-flex space-x-1 values-center disabled:cursor-not-allowed disabled:bg-indigo-50    hover:bg-indigo-900 px-5 bg-purple-700 text-white py-1.5 font-medium rounded-lg"
                >
                  <span>Next</span>
                  <span>
                    <HiArrowNarrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TableData;
