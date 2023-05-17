import React, { useEffect, useState, useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.js";
import Spinner from "../../../utils/Spinner.jsx";
import { Formik, Form, FieldArray } from "formik";

import { FaAccessibleIcon, FaGit, FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import TaskCard from "../../../features/tasks/pages/TaskCard.jsx";
import { useGetUserTasksQuery } from "../../../features/tasks/slices/taskApiSlice.js";
import CustomText from "../../../utils/CustomFieldComp/CustomText.jsx";
import Map from "../../../features/tasks/Map.jsx";
import Button from "../../../ui/Button.jsx";

let filters = {
  category: false,
  pricing: false,
  location: false,
  status: false,
  sort: false,
};

const MyTasksInfiniteScroll = () => {
  // const [initialFormData, setInitialFormData] = useState(fields);

  const { userLoggedIn: isLoggedIn, id: userId } = useAuth();
  const dispatch = useDispatch();
  const [query, setQuery] = useState({});
  const [loginShow, setLoginShow] = useState(false);
  const [filterName, setFilterName] = useState(undefined);
  const [clearValues, setClearValues] = useState(false);
  const [pageInfo, setPageInfo] = useState({});
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [showFilter, setShowFilter] = useState(filters);
  const [loadFilter, setLoadFilter] = useState(false);
  const [closeMap, setCloseMap] = useState(false);
  const [realTimeTasks, setRealTimetasks] = useState([]);
  const [showTaskSidebar, setShowTaskSidebar] = useState(true);
  const [filterTasks, setFilterTasks] = useState(false);

  const [urlParams, setUrlParams] = useSearchParams();

  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const [newTaskCount, setNewTaskCount] = useState(0);

  const navigate = useNavigate();

  //Get the filter params from the url , empty the task array, immediately start the filtering

  useEffect(() => {
    setCloseMap((prev) => !prev);

    let currentQuery = {};

    if (urlParams) {
      currentQuery = queryString.parse(urlParams.toString());
      // console.log(typeof currentQuery, currentQuery);
    }

    if (currentQuery.status) {
      setQuery({ status: currentQuery.status });
    } else if (currentQuery.filter) {
      setQuery({ filter: currentQuery.filter });
    } else if (currentQuery.search) {
      setQuery({ search: currentQuery.search });
    } else {
      setQuery((prev) => prev);
    }

    // setFilterTasks(true);
    // setLoadFilter(true);

    // setQuery((prev) => ({

    // }));

    // setLoadFilter(true);
  }, [urlParams]);

  console.log(query);

  const {
    data: taskData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetUserTasksQuery(
    {
      page: currentPage,
      ...query,
    },
    { refetchOnMountOrArgChange: true }
  );

  //Function to submit the request of the search form when  the user clicks apply
  const handleSubmit = useCallback(
    (values) => {
      setShowMobileFilter((prev) => !prev);

      let newQuery = {};

      //trigger map disappearance everytime search is launched

      if (urlParams) {
        newQuery = queryString.parse(urlParams.toString());

        const url = queryString.stringifyUrl(
          {
            url: "/my-tasks/",
            query: values,
          },
          { skipNull: true }
        );

        navigate(url);
      }
    },
    [urlParams, filterTasks, loadFilter]
  );

  useEffect(() => {
    if (taskData) {
      const { ids, entities, pageData } = taskData;
      setPageInfo(pageData);

      if (filterTasks) {
        // setLoadFilter(true);
        setTasks([...ids.map((id) => entities[id])]);
      } else {
        setTasks((prev) => {
          return [...prev, ...ids.map((id) => entities[id])];
        });
      }
    }

    //cleanup the component
    return () => {
      setFilterTasks(false);
      setTasks([]);
    };
  }, [taskData, urlParams]);

  useEffect(() => {
    filterTasks ? setLoadFilter(true) : setLoadFilter(false);
  }, [filterTasks]);

  const handleTaskDisplay = useCallback(() => {
    setShowTaskSidebar(false);
  }, [showTaskSidebar]);

  const handleClick = () => {
    navigate("/create/post-a-task");
  };

  const renderTasks =
    tasks.length > 0 ? (
      tasks.map((task, idx) => (
        <TaskCard
          task={task}
          idx={idx}
          setOpen={setOpen}
          mainDisplay={false}
          isHost={true}
        />
      ))
    ) : !loadFilter && pageInfo.count === 0 ? (
      <>
        <p className="text-gray-700  font-semibold whitespace-pre-wrap py-4 text-primary text-center">
          No matching tasks
        </p>
        <div className="flex justify-center py-2">
          <Button
            onClick={handleClick}
            text={"Post a  task"}
            primary
            style="px-12 py-2.5"
          />
        </div>
      </>
    ) : null;

  useEffect(() => {
    if (filterName) {
      setShowFilter((prev) => ({
        ...filters,
        [filterName]: !prev[filterName],
      }));
    } else {
      setShowFilter(filters);
    }

    // return () => setShowFilter(undefined);
  }, [filterName]);

  return (
    <>
      <section className="relative h-[calc(100vh_-_70px)]  overflow-hidden ">
        <div
          onClick={() => setFilterName(undefined)}
          className={`bg-white  relative
          after:absolute after:z-10 after:h-screen after:w-screen  after:justify-center after:items-center after:flex ${
            loadFilter ? "after:bg-slate-500/30" : "after:bg-slate-700/40"
          }
             ${filterName || loadFilter ? "after:visible " : "after:hidden"}
           `}
        >
          <div className="w-full ">
            <Formik
              enableReinitialize={true}
              initialValues={{ search: "" }}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
              }}
              className="bg-gray-600"
            >
              {({ values }) => {
                return (
                  <Form
                    autoComplete="off"
                    onClick={(e) => e.stopPropagation()}
                    className="  border-y "
                  >
                    <div className=" w-full flex flex-col md:flex-row  md:w-[80%]  mx-auto md:justify-center lg:justify-start  space-x-1 md:space-x-14 items-center  ">
                      <div className="flex w-full md:w-96 md:block relative flex-1 rounded-lg md:flex-none   sm:py-0 px-2  ">
                        <CustomText
                          name="search"
                          labelstyle={`sr-only`}
                          wrapperclass={`relative `}
                          inputstyle={`w-full   py-2.5 md:py-3 rounded md:rounded  outline-none text-[12px]  h-full  caret-indigo-400 dark:caret-gray-300 bg-slate-100  pr-8 dark:bg-gray-700  outline-none  border-purple-100 dark:border-gray-600  dark:text-gray-400 placeholder:text-[12px] placeholder:md:text-[14px] placeholder:text-gray-500 indent-3  w-full text-xs font-medium text-gray-700 border   `}
                          placeholder="Search for tasks"
                          adornment={`text-[0.8rem]  lg:block text-gray-400 font-thin dark:text-gray-400 absolute top-[37%] right-[4.5%]  z-10  `}
                        />
                        <button
                          type="button"
                          onClick={() => setShowMobileFilter((prev) => !prev)}
                          className="my-1.5 absolute right-2 top-2 bg-brand-secondary   rounded-md  md:hidden cursor-pointer px-2 "
                          role="button"
                        >
                          <span className="w-5 h-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="#374151"
                              className="text-brand-accent"
                            >
                              <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
                            </svg>
                          </span>
                        </button>
                        <span
                          className="hidden md:block absolute top-1/3 right-5 cursor-pointer "
                          role="button"
                        >
                          <AiOutlineSearch size={16} />
                        </span>
                      </div>

                      <div className="hidden relative md:block w-full pb-3 md:pb-0">
                        <div className=" md:flex justify-start items-start md:items-center  md:flex-row whitespace-nowrap gap-y-4 gap-x-8 text-primary">
                          <button
                            type="button"
                            onClick={() =>
                              handleSubmit({ status: "All tasks" })
                            }
                          >
                            All tasks
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSubmit({ status: "Open" })}
                          >
                            Open tasks
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSubmit({ status: "Assigned" })}
                          >
                            Assigned Tasks
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleSubmit({ status: "Completed" })
                            }
                          >
                            Completed Tasks
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSubmit({ status: "Appeal" })}
                          >
                            Appealed Tasks
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        {loadFilter && (
          <div className="absolute z-20  w-screen  ">
            <div className="flex justify-center items-center w-full h-[70vh]">
              <Spinner visible width={50} height={50} color="green" />
            </div>
          </div>
        )}
        {/* {!isLoading && !isError ? ( */}
        <section className="max-w-screen-xl mx-auto">
          <div className="relative flex flex-col justify-start md:flex-row">
            <section
              id="scrollableDiv"
              className={`${
                showTaskSidebar ? " " : "absolute -left-[100vw] md:left-0"
              } w-full md:w-1/2 lg:w-1/3  h-[calc(100vh_-_20px)] bg-[#f3f5f7] md:bg-transparent z-5 pb-[120px]  md:relative  lg:block    scrollbar-thin scrollbar-thumb-gray-300/30 scrollbar-track-gray-200 overflow-x-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full px-2 lg:pl-6 lg:pr-3 space-y-4  `}
            >
              {/* <TaskFilters /> */}

              <InfiniteScroll
                dataLength={tasks.length}
                scrollableTarget="scrollableDiv"
                // next={handleChange}
                hasMore={Number(pageInfo.page) < Number(pageInfo.pages)}
                loader={
                  <>
                    {(Number(pageInfo.page) < Number(pageInfo.pages) &&
                      isLoggedIn) ||
                    tasks?.length < 1 ? (
                      <Spinner
                        height={30}
                        width={30}
                        visible={true}
                        color="green"
                        position="justify-center"
                      />
                    ) : null}
                  </>
                }
              >
                <div className="pt-2 pb-[1rem] space-y-4 list-none">
                  {renderTasks}
                </div>
              </InfiniteScroll>
            </section>

            <section className="relative w-full h-screen overflow-x-hidden  md:w-1/2 lg:w-2/3 ">
              <div className="absolute top-0 bottom-0 left-0 right-0 z-0 hidden w-full h-full overflow-x-hidden md:block flex-1 ">
                <Map />
              </div>
              <Outlet
                context={[
                  open,
                  setOpen,
                  closeMap,
                  showTaskSidebar,
                  setShowTaskSidebar,
                ]}
              />
            </section>
          </div>
        </section>
        {/* // ) : null} */}
      </section>
    </>
  );
};

export default MyTasksInfiniteScroll;
