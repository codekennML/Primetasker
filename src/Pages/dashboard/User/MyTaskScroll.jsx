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
import Map from "../../../features/tasks/Map.jsx";
import TaskCard from "../../../features/tasks/pages/TaskCard.jsx";
import { useGetTasksQuery } from "../../../features/tasks/slices/taskApiSlice.js";

let filters = {
  category: false,
  pricing: false,
  location: false,
  status: false,
  sort: false,
};

const MyTasksInfiniteScroll = () => {
  // const [initialFormData, setInitialFormData] = useState(fields);

  const { userLoggedIn: isLoggedIn } = useAuth();
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

    if (currentQuery?.range) {
      setFilterTasks(true);
      setLoadFilter(true);

      const { assigned, zeroOffers, location, categories, ...queries } =
        currentQuery;

      let parsedCategories;

      const categoryArray = Array.isArray(categories)
        ? categories
        : [categories];

      if (categoryArray?.length < 2 && categoryArray[0] === undefined) {
        parsedCategories = [];
      } else {
        parsedCategories = [
          ...categoryArray.map((category) => Number(category)),
        ];
      }

      const parsedLocation = JSON.parse(location);

      setInitialFormData({
        ...queries,
        assigned: JSON.parse(assigned),
        zeroOffers: JSON.parse(zeroOffers),
        categories: parsedCategories,
        location: parsedLocation,
      });

      setQuery((prev) => ({
        ...prev,
        ...queries,
        assigned: JSON.parse(assigned),
        zeroOffers: JSON.parse(zeroOffers),
        categories: parsedCategories,
        location: location,
      }));

      setLoadFilter(true);
    }
  }, [urlParams]);

  const {
    data: taskData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetTasksQuery(
    {
      page: currentPage,
      ...query,
    },
    { refetchOnMountOrArgChange: true }
  );

  //Function to change the tasks page on scroll
  const handleChange = useCallback(() => {
    isLoggedIn ? setCurrentPage((prev) => prev + 1) : setLoginShow(true);
  }, [isLoggedIn, currentPage, loginShow]);

  //Function to submit the request of the search form when  the user clicks apply
  const handleSubmit = useCallback(
    (values) => {
      setShowMobileFilter((prev) => !prev);

      let newQuery = {};

      const { location, ...params } = values;

      //trigger map disappearance everytime search is launched

      if (urlParams) {
        newQuery = queryString.parse(urlParams.toString());

        let newParams = {
          ...newQuery,
          ...params,
          location: JSON.stringify(location),
        };

        const url = queryString.stringifyUrl(
          {
            url: "/tasks/",
            query: newParams,
          },
          { skipNull: true }
        );

        navigate(url);
      }
    },
    [urlParams, filterTasks, loadFilter]
  );

  //Function to add the realtime tasks gotten from the server sent events to the list of tasks currently showing on the page

  // const handleRefresh = useCallback(() => {
  //   setNewTaskCount(0);

  //   setTasks((prev) => {
  //     return [...realTimeTasks, ...prev];
  //   });
  // }, [newTaskCount]);

  //Normal task fetch per page container , updates and appends tasks on downward scroll
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

  const renderTasks =
    tasks.length > 0 ? (
      tasks.map((task, idx) => (
        <TaskCard task={task} idx={idx} setOpen={setOpen} />
      ))
    ) : !loadFilter && pageInfo.count === 0 ? (
      <p className="text-gray-700 text-[1rem] font-semibold whitespace-pre-wrap ">
        No matching tasks was found. Try widening your search
      </p>
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

  const closeButton = (
    <button
      onClick={() => setShowMobileFilter((prev) => !prev)}
      type="button"
      className="items-center  text-lg text-brand-text-deep  top-1 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <FaTimes />
    </button>
  );

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
              initialValues={{}}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values);
              }}
              className="bg-gray-600"
            >
              {({ values, setFieldValue }) => {
                return (
                  <Form
                    autoComplete="off"
                    onClick={(e) => e.stopPropagation()}
                    className="  border-y "
                  ></Form>
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

        {!isLoading && !isError ? (
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
                  next={handleChange}
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
        ) : null}
      </section>
    </>
  );
};

export default MyTasksInfiniteScroll;
