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
import { openModal } from "../modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import GeneralModal from "../modal/GeneralModal";
import EditUser from "../users/pages/EditUser";
import { FaRegEdit, FaRegTrashAlt, FaSearch } from "react-icons/fa";
import DeleteUser from "../users/pages/DeleteUser";
import ModalContent from "../modal/ModalContent";
import { Formik, Form } from "formik";
import CustomText from "../../utils/CustomFieldComp/CustomText";
import { ThreeCircles } from "react-loader-spinner";
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

const BasicTable = ({ fetchTableData, headers, filterList, sortList }) => {
  const pageData = useSelector(pageInfo);

  const [data, setData] = useState([]);
  const [userId, setUserId] = useState();
  const modalStatus = useSelector((state) => state.modal.openModalStatus);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); //Search Query for table

  const onSubmit = (values, actions) => {
    values.searchQuery?.length
      ? setSearchQuery(values.searchQuery)
      : setSearchQuery("");
    actions.resetForm();
  };

  //>>>>>>>>>>>>>>>>>>>> Display the component >>>>>>>>>>>>>>>>>>>>>///

  const [clicked, setClicked] = useState({
    create: false,
    edit: false,
    delete: false,
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    setClicked((prev) => ({
      ...prev,
      delete: true,
      edit: false,
      create: false,
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

  const handleCreate = () => {
    setClicked((prev) => ({
      ...prev,
      edit: false,
      delete: false,
      create: true,
    }));
    setUserId(null);
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

    // CREATE USER ON CLICK
  } else if (modalStatus && clicked.create) {
    content = (
      <GeneralModal>
        <ModalContent />
      </GeneralModal>
    );
  } else {
    content = "";
  }

  //Table Data MUST  be an array

  const columns = useMemo(() => headers, []);

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

  const tableInstance = useTable(
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

  const {
    getTableProps,
    getTableBodyProps,
    page,
    prepareRow,
    headerGroups,

    canPreviousPage,
    canNextPage,

    pageCount,
    selectedFlatRows,
    nextPage,
    previousPage,

    state: { pageIndex, selectedRowIds },
  } = tableInstance;

  const {
    data: tableArray,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = fetchTableData(
    {
      sort: sort,
      page: pageIndex + 1,
      search: searchQuery,
      filter: filter,
    }
    // { refetchOnMountOrArgChange: true }
  );

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Set the Data to be displayed into the tableData Array>>>>>>>//

  useEffect(() => {
    let tableData = [];

    if (isSuccess) {
      const { ids, entities } = tableArray;
      const entitiesMap = ids.map((id) => entities[id]);
      tableData = [...entitiesMap];
    }

    setData([...tableData]);
  }, [tableArray, pageIndex]);

  let tableContent;

  if (isLoading || isFetching) {
    tableContent = (
      <tr className="absolute left-1/2 space-y-4 mt-32">
        <td>
          <Spinner />
        </td>
      </tr>
    );
  } else if (isError) {
    tableContent = (
      <tr className="absolute left-1/2 space-y-4 mt-4">
        <td>
          <p>{error?.data?.message}</p>
          <button
            onClick={() => onSubmit("")}
            className="mr-4 mt-12 flex values-center bg-indigo-700  py-1.5 px-6 ml-2 text-[15px] font-medium text-white  rounded-lg  hover:bg-indigo-800  focus:outline-none  dark:bg-violet-600 dark:hover:bg-violet-700 dark:text-white"
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
        <tr {...row.getRowProps()}>
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
    <div className=" max-w-full overflow-x-hidden ">
      {content}
      <section className=" antialiased  text-gray-600 ">
        <div className="h-full">
          <div className="w-full  mx-auto bg-white rounded-sm border border-t-0 border-gray-100  max-w-full dark:bg-violet-600 dark:border-none">
            <header className="pl-2 pr-5 py-2 border-b border-gray-100 flex items-center justify-between dark:border-none">
              <div className="flex flex-1 values-center space-x-1.5 w-full">
                <div className="pl-4 w-full">
                  {/* TABLE HEADERS (FILTERS , SORT, EXPORT , SEARCH) */}
                  <Formik
                    initialValues={{
                      searchQuery: "",
                    }}
                    onSubmit={onSubmit}
                  >
                    {({ values }) => (
                      <Form className="flex flex-row  space-x-4 w-full ">
                        <div className=" relative">
                          <CustomText
                            name="searchQuery"
                            labelstyle={`hidden`}
                            imgBfr={<FaSearch />}
                            wrapperclass={`relative `}
                            inputstyle={`py-2.5 w-96 outline-none text-[13px] caret-indigo-400  border-2 border-indigo-100 text-indigo-800 placeholder:text-indigo-800 `}
                            placeholder={`Search users by ID or email`}
                            svgclass={`text-[13px] text-indigo-800/30 font-thin absolute top-[32%] left-[3%]  z-10 `}
                          />
                        </div>

                        <div className="relative flex values-center  px-2  rounded-md border-2 border-indigo-100  ">
                          <button
                            type="button"
                            className=" px-3 py-2 cursor-not-allowed text-sm flex values-center  space-x-2 border-r-2 border-gray-200  text-indigo-800 font-medium"
                          >
                            <span className="text-xl ">
                              <MdFilterList />
                            </span>
                          </button>

                          <Listbox
                            name="filter"
                            value={filter}
                            onChange={(filter) => setFilter(filter)}
                          >
                            {({ open }) => (
                              <>
                                <div className="relative  w-40">
                                  <Listbox.Button className=" w-full flex items-center cursor-pointer  text-xs font-medium text-center relative   py-2 pl-3 pr-10 shadow-sm focus:outline-none  sm:text-sm">
                                    <span className="text-indigo-700  ">
                                      {filter ? filter : filterList[0].name}
                                    </span>
                                    <span className="absolute right-5">
                                      <HiChevronUpDown className="w-5 h-5 text-violet-600 " />
                                    </span>
                                  </Listbox.Button>

                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options className=" py-2  border-none focus:outline-none  mt-2] text-[20px] font-medium absolute z-10 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                                      {filterList.map((item, idx) => (
                                        <Listbox.Option
                                          key={idx}
                                          value={item.value}
                                          className={({ active }) =>
                                            `relative cursor-pointer select-none   py-2 pl-10 pr-4 ${
                                              active
                                                ? "bg-violet-100 text-blue-900"
                                                : "text-gray-900"
                                            }`
                                          }
                                        >
                                          {({ value }) => (
                                            <>
                                              <span
                                                className={`block truncate ${
                                                  selected
                                                    ? "font-medium"
                                                    : "font-normal"
                                                }`}
                                              >
                                                {item.name}
                                              </span>
                                              {value ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-600">
                                                  <AiOutlineCheckCircle
                                                    className="h-5 w-5"
                                                    // aria-hidden="true"
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                          {item.name}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </>
                            )}
                          </Listbox>
                        </div>

                        <div className="relative flex values-centerr px-2 rounded-md   border-2 border-indigo-100   ">
                          <button
                            type="button"
                            className=" px-3 py-2 flex text-sm  values-center space-x-1   border-r-2 border-gray-200  text-indigo-800 font-medium"
                          >
                            <span className="text-xl text-indigo-700">
                              <HiSortDescending />
                            </span>

                            {/* <span>Sort By </span> */}
                          </button>

                          <Listbox
                            name="sort"
                            value={sort}
                            onChange={(value) => setSort(value)}
                          >
                            {({ open }) => (
                              <>
                                <div className="relative  w-40">
                                  <Listbox.Button className="w-full  text-xs font-medium text-center relative  py-2 pl-3 pr-10 shadow-sm focus:outline-none  sm:text-sm text-indigo-700 cursor-pointer ">
                                    {sort ? sort : sortList[0].name}
                                  </Listbox.Button>

                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options className="  py-2  border-none focus:outline-none  mt-2] text-[20px] text-indigo-800 font-medium absolute z-10 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                                      {sortList.map((item, idx) => (
                                        <Listbox.Option
                                          key={idx}
                                          value={item.value}
                                          className={({ active }) =>
                                            `relative select-none py-2 pl-10 pr-4 cursor-pointer ${
                                              active
                                                ? "bg-violet-100 text-blue-900"
                                                : "text-gray-900"
                                            }`
                                          }
                                        >
                                          {({ value }) => (
                                            <>
                                              <span
                                                className={`block truncate ${
                                                  selected
                                                    ? "font-medium"
                                                    : "font-normal"
                                                }`}
                                              >
                                                {item.name}
                                              </span>
                                              {value ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-violet-600">
                                                  <AiOutlineCheckCircle
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                          {item.name}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </>
                            )}
                          </Listbox>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <div className="space-x-3 flex ">
                <CSVLink
                  data={data}
                  filename={"my-file.csv"}
                  className="btn btn-primary"
                  target="_blank"
                >
                  <button className=" mr-4 flex values-center py-1.5 px-3 ml-2 text-[15px] font-medium text-indigo-800 border-2 border-indigo-100  rounded-lg  hover:bg-gray-50  focus:outline-none  dark:bg-violet-600 dark:hover:bg-violet-700 dark:text-white">
                    <span className="pr-2 text-[10px] ">
                      <AiOutlineCloudDownload className="text-lg " />
                    </span>
                    Export
                  </button>
                </CSVLink>

                <button
                  onClick={() => handleCreate()}
                  className="mr-4 flex values-center py-1.5 px-3 ml-2 text-[15px] font-medium text-violet-800 border-2 border-indigo-100  rounded-lg  hover:bg-gray-50  focus:outline-none  dark:bg-violet-600 dark:hover:bg-violet-700 dark:text-white"
                >
                  <span className="pr-2 text-[10px]">
                    <AiOutlineUserAdd className="text-lg " />
                  </span>
                  Add New User
                </button>
              </div>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto  lg:max-w-screen-lg xl:max-w-[calc(80vw)] xl:w-full  min-h-[500px] scrollbar-hide ">
                <table
                  {...getTableProps()}
                  className="relative text-[13.5px] font-medium table-auto text-gray-700 whitespace-nowrap border-separate w-full min-w-full dark:bg-violet-600 dark:border-collapse dark:text-gray-200"
                >
                  <thead className="sticky top-0">
                    {headerGroups.map((headerGroup) => (
                      <tr
                        {...headerGroup.getHeaderGroupProps()}
                        className="sticky top-0"
                      >
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
                  className=" inline-flex items-center space-x-1 values-center disabled:bg-indigo-50 disabled:cursor-not-allowed bg-indigo-800 text-white hover:bg-indigo-900 px-6 py-2 font-medium rounded-lg"
                >
                  <span>
                    <HiArrowNarrowLeft />
                  </span>
                  <span>Previous</span>
                </button>

                <div cl>
                  <p>{`Showing Page ${pageIndex + 1} of ${pageCount} ~  ${
                    pageData.totalDocs
                  } entries`}</p>
                  <p></p>
                </div>

                <button
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  className="border items-center  inline-flex space-x-1 values-center disabled:cursor-not-allowed disabled:bg-indigo-50    hover:bg-indigo-900 px-8 bg-indigo-800 text-white py-2 font-medium rounded-lg"
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

export default BasicTable;
