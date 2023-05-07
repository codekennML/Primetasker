import React, { useEffect, useState, useCallback, useMemo } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { allCategories, items } from "./TaskFilters.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { useGetTasksQuery } from "../slices/taskApiSlice.js";
import useAuth from "../../../hooks/useAuth.js";

import Spinner from "../../../utils/Spinner.jsx";
import CustomCheckbox from "../../../utils/CustomFieldComp/CustomCheckbox";
import { Formik, Form, FieldArray } from "formik";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import { FaAccessibleIcon, FaGit, FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import CustomRadio from "../../../utils/CustomFieldComp/CustomRadioCheck";
import { AiFillCheckCircle } from "react-icons/ai";
import { Range, SingleRange } from "../../../utils/Range.jsx";
import Toggle from "../../../utils/CustomToggle";
import AutoCompleteMap from "../utils/AutoCompleteMap.jsx";
import { clearCount } from "../slices/taskApiSlice";
import { configureAbly, useChannel } from "@ably-labs/react-hooks";
import queryString from "query-string";
import TaskMainDisplay from "./TaskMainDisplay.jsx";
import Map from "../Map.jsx";
import { BsChevronLeft } from "react-icons/bs";
import { userLocaleInfo } from "../../geolocate/slices/geolocateSlice.js";
import TaskCard from "./TaskCard.jsx";
import MapContainer from "../Map.jsx";
import { setCoordinates } from "react-advanced-cropper";

import MobileFilter from "./MobileFilter.js";

// let connection;

// if (!connection) {
//   configureAbly({
//     key: "jv-QDg.K2HcoQ:_S86OfBzuEmovbVkjFzLu3_O3r-f0tCexwPqi1vUDF0",
//   });
// }

// import { selectStreamedTasks } from "../slices/taskApiSlice.js";

let filters = {
  category: false,
  pricing: false,
  location: false,
  status: false,
  sort: false,
};

const fields = {
  search: "",
  categories: [],
  taskType: "All",
  range: [5000, 1000000],
  sort: "createdAt:-1",
  location: {
    place: {
      name: "Lekki, Lagos",
      placeId: "",
    },
    lng: 4.0815,
    lat: 6.4094999999999995,
  },
  maxDistance: [0, 50],
  assigned: false,
  zeroOffers: false,
};

const TaskSidebar = () => {
  const localeData = useSelector(userLocaleInfo);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3500/api/sse");
    console.log("Listening for new posts....");

    eventSource.addEventListener("message", (event) => {
      console.log(event);

      const realTimeTask = JSON.parse(event.data);
      console.log(realTimeTask);

      setNewTaskCount((prev) => prev + 1);

      setRealTimetasks((prev) => [realTimeTask, ...prev]);
    });

    return () => {
      eventSource.close();
    };
  }, []);

  const [userLocation, setUserLocation] = useState({});

  const [initialFormData, setInitialFormData] = useState(fields);

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
  const [coordinates, setCoordinates] = useState(null);
  const [urlParams, setUrlParams] = useSearchParams();

  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const [newTaskCount, setNewTaskCount] = useState(0);
  const [markers, setMarkers] = useState(null);

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

      setCoordinates({
        lng: parsedLocation.lng,
        lat: parsedLocation.lat,
      });

      // console.log(initialFormData);
    }
    // return () => {
    //   setTasks([]);
    // };
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

  //Populate User Location details fetched from having run therir IP against a geolocation api

  useEffect(() => {
    let userLocation;

    const getUserLocation = (localeData) => {
      userLocation = {
        place: {
          name: localeData?.area,
          placeId: "",
        },
        lng: localeData?.coordinates?.lng,
        lat: localeData?.coordinates?.lat,
      };

      setInitialFormData((prev) => ({ ...prev, location: userLocation }));

      setCoordinates({
        lng: localeData?.coordinates?.lng,
        lat: localeData?.coordinates?.lat,
      });
    };

    localeData.hasOwnProperty("area") ? getUserLocation(localeData) : null;
  }, [localeData]);

  //Function to change the tasks page on scroll
  const handleChange = useCallback(() => {
    isLoggedIn ? setCurrentPage((prev) => prev + 1) : setLoginShow(true);
  }, [isLoggedIn, currentPage, loginShow]);

  //Function to submit the request of the search form when  the user clicks apply
  const handleSubmit = useCallback(
    (values) => {
      // console.log(values);
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

        // setFilterTasks(true);
        // setLoadFilter(true);

        // console.log(url);
        navigate(url);
      }
    },
    [urlParams, filterTasks, loadFilter]
  );

  //Function to add the realtime tasks gotten from the server sent events to the list of tasks currently showing on the page

  const handleRefresh = useCallback(() => {
    setNewTaskCount(0);

    setTasks((prev) => {
      return [...realTimeTasks, ...prev];
    });
  }, [newTaskCount]);

  //Normal task fetch per page container , updates and appends tasks on downward scroll
  useEffect(() => {
    if (taskData) {
      console.log("Holla");
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

  const taskLocations = useMemo(() => {
    let physicalTasks = [];

    if (tasks.length > 0) {
      physicalTasks = tasks
        .filter((task) => task.taskType !== "Remote")
        .slice(0, 20);
      return physicalTasks;
    }

    setMarkers(physicalTasks);
  }, [tasks]);

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
              initialValues={initialFormData}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values);

                // console.log(values);
                // resetForm();
                // setFilterName(undefined);
              }}
              className="bg-gray-600"
            >
              {({ values, setFieldValue }) => {
                return (
                  <Form
                    autoComplete="off"
                    onClick={(e) => e.stopPropagation()}
                    className="  border-y "
                  >
                    <div className=" w-full flex flex-col md:flex-row  md:w-[80%]  mx-auto md:justify-center lg:justify-start  space-x-1 md:space-x-14 items-center  ">
                      {/* <div className="w-full md:hidden px-2 flex justify-between"> */}
                      <div className="w-full md:w-96 md:block relative flex-1 rounded-lg md:flex-none    max-w-72  ">
                        <CustomText
                          name="search"
                          labelstyle={`sr-only`}
                          wrapperclass={`relative `}
                          inputstyle={`w-full   py-2.5 md:py-3 rounded-full md:rounded  outline-none text-[12px]  h-full  caret-indigo-400 dark:caret-gray-300 bg-slate-100  pr-8 dark:bg-gray-700  outline-none  border-purple-100 dark:border-gray-600  dark:text-gray-400 placeholder:text-[14px] placeholder:text-gray-500 indent-3  w-full text-xs font-medium text-gray-700 border pr-8  `}
                          placeholder="Search for tasks"
                          adornment={`text-[0.8rem]  lg:block text-gray-400 font-thin dark:text-gray-400 absolute top-[37%] right-[4.5%]  z-10  `}
                        />
                        <span
                          onClick={() => setShowMobileFilter((prev) => !prev)}
                          className="absolute top-1/4 right-3 md:hidden cursor-pointer "
                          role="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="text-brand-text-light"
                          >
                            <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
                          </svg>
                        </span>

                        <span
                          className="hidden md:block absolute top-1/3 right-5 cursor-pointer "
                          role="button"
                        >
                          <AiOutlineSearch size={16} />
                        </span>
                      </div>

                      {isLoading && (
                        <div className="">
                          <Spinner
                            visible
                            width={30}
                            height={30}
                            color="green"
                          />
                        </div>
                      )}

                      {/* Desktop Filters */}

                      <div className="hidden relative md:block w-full pb-3 md:pb-0">
                        <ul className=" md:flex justify-start items-start md:items-center  md:flex-row whitespace-nowrap gap-y-4 gap-x-4">
                          <li className="list-none select-none  ">
                            <div className="relative ">
                              <button
                                type="button"
                                onClick={() => setFilterName("category")}
                                className="search-filter-label"
                              >
                                <span>
                                  {" "}
                                  {values.categories.length > 1
                                    ? `${
                                        allCategories[
                                          Number(values.categories[0]) - 1
                                        ]?.name
                                      } and ${
                                        Number(values.categories.length) - 1
                                      } more`
                                    : values.categories.length < 1
                                    ? "Categories"
                                    : `${
                                        allCategories[
                                          Number(values.categories[0]) - 1
                                        ]?.name
                                      }`}{" "}
                                </span>
                                <span className="arrow-down"></span>
                              </button>

                              {showFilter.category && (
                                <div className="absolute z-30 w-[650px] max-w-[700px] max-h-[75vh] py-2  top-[3.6rem] bg-white  rounded-lg shadow-md  ">
                                  <section className="relative flex flex-col  pt-2 h-full px-6 ">
                                    <div className="flex flex-col items-center justify-start py-1 md:py-3 md:flex-row md:justify-between ">
                                      <p className="py-2 text-md md:text-[1rem] font-semibold text-green-800 hidden md:block ">
                                        Filter Categories{" "}
                                        <p>{showFilter.category}</p>
                                      </p>
                                      <p className="py-2 text-md md:text-[.9rem] font-semibold text-green-800  md:hidden ">
                                        {values.categories.length > 1
                                          ? `${
                                              allCategories[
                                                Number(values.categories[0]) - 1
                                              ]?.name
                                            } and ${
                                              Number(values.categories.length) -
                                              1
                                            } more`
                                          : values.categories.length < 1
                                          ? "No Category Selected"
                                          : `${
                                              allCategories[
                                                Number(values.categories[0]) - 1
                                              ]?.name
                                            }`}
                                      </p>
                                      <p className="hidden md:block">
                                        {closeButton}
                                      </p>
                                    </div>

                                    <div className="h-full max-h-[50vh] min-h-[200px] overflow-x-hidden overflow-y-scroll scrollbar-thin ">
                                      <div
                                        className="grid grid-cols-1 first:my-0 md:grid-cols-2 md:px-4"
                                        aria-labelledby="mega-menu-dropdown-button"
                                      >
                                        <FieldArray name="categories">
                                          {(arrayHelpers) => (
                                            <>
                                              {allCategories.map(
                                                (category, index) => (
                                                  <CustomCheckbox
                                                    key={index}
                                                    type="checkbox"
                                                    name="categories"
                                                    className="w-5 h-5 my-3 cursor-pointer accent-brand-light"
                                                    labelstyle={`text-[.85rem] font-medium text-brand-text`}
                                                    label={category.name}
                                                    value={category.id}
                                                    checked={values.categories.includes(
                                                      category.id
                                                    )}
                                                    onChange={(e) => {
                                                      if (e.target.checked) {
                                                        arrayHelpers.push(
                                                          category.id
                                                        );
                                                      } else {
                                                        const idx =
                                                          values.categories.indexOf(
                                                            category.id
                                                          );
                                                        arrayHelpers.remove(
                                                          idx
                                                        );
                                                      }
                                                    }}
                                                  />
                                                )
                                              )}
                                            </>
                                          )}
                                        </FieldArray>
                                      </div>
                                    </div>

                                    <div className="flex items-center justify-between mx-6 mt-4 mb-2 space-x-3 ">
                                      <button
                                        type="button"
                                        onClick={() => setFilterName(undefined)}
                                        className="bg-brand-secondary text-gray-600 py-1.5 rounded  w-full"
                                      >
                                        Cancel
                                      </button>

                                      <button
                                        type="submit"
                                        onClick={() => setFilterName(undefined)}
                                        className="bg-brand-light text-white py-1.5 rounded w-full"
                                      >
                                        Apply
                                      </button>
                                    </div>
                                  </section>
                                </div>
                              )}
                            </div>
                          </li>

                          <li className="relative list-none select-none max-w-">
                            <button
                              type="button"
                              onClick={() => setFilterName("location")}
                              className=" search-filter-label"
                            >
                              <span className="block max-w-[150px] text-ellipsis overflow-hidden ">{`${initialFormData?.maxDistance[1]}km ${initialFormData?.location?.place?.name}`}</span>
                              <span className="arrow-down"></span>
                            </button>

                            {showFilter.location && (
                              <div className="absolute z-20  py-2  top-[3rem] max-w-[700px] rounded-lg shadow-md bg-white  w-[400px] overflow-y-hidden ">
                                <section className="relative w-full h-full md:px-4  ">
                                  <div className="w-full px-4 mt-6 ">
                                    <h3 className="text-[.9rem] text-brand-light font-bold mb-3 uppercase">
                                      To be done
                                    </h3>
                                    <div className="py-1 pb-4 rounded-md ">
                                      <CustomRadio
                                        name="taskType"
                                        options={[
                                          { name: "Any", value: "All" },
                                          { name: "Remote", value: "Remote" },
                                          {
                                            name: "In-Person",
                                            value: "Physical",
                                          },
                                        ]}
                                        checked={values.taskType}
                                        style={`flex flex-col gap-y-2 md:gap-y-0 gap-x-0 md:gap-x-2   md:flex-row mt-2 justify-between items-center w-full  px-2 `}
                                        renderItem={(
                                          name,
                                          idx,
                                          icon,
                                          value,
                                          checked
                                        ) => {
                                          return (
                                            <div
                                              key={idx}
                                              className={` ${
                                                checked
                                                  ? "bg-brand-light text-white border-0"
                                                  : "bg-slate-100 text-gray-500"
                                              } relative  px-2 w-full flex-1   text-center  rounded-lg py-4 flex flex-col items-center justify-center  cursor-pointer `}
                                            >
                                              <p
                                                className={`${
                                                  checked
                                                    ? "bg-brand-light text-white border-0"
                                                    : "hidden"
                                                }`}
                                              >
                                                <AiFillCheckCircle className="text-[20px] font-medium absolute top-2 right-2" />
                                              </p>

                                              <p className="text-[0.9rem] font-semibold  px-4">
                                                {name}
                                              </p>
                                            </div>
                                          );
                                        }}
                                      />
                                    </div>

                                    <div className="mt-2">
                                      <h3 className="text-[1rem] text-brand-light font-bold mb-3 uppercase">
                                        {" "}
                                        Where ?{" "}
                                      </h3>

                                      <AutoCompleteMap
                                        name="location"
                                        // values={values.location}
                                      />
                                    </div>

                                    <div className="mt-2">
                                      <h3 className="text-[0.8rem] text-gray-500 font-bold mb-1 uppercase">
                                        {" "}
                                        Distance ?{" "}
                                      </h3>
                                      <p className="font-semibold mt-1 mb-5 text-[.9rem] text-center  text-gray-600 ">
                                        {`${values.maxDistance[1]}km`}
                                      </p>
                                      <SingleRange name="maxDistance" />
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between mx-6 mt-16 mb-2 space-x-3 ">
                                    <button
                                      type="button"
                                      onClick={() => setFilterName(undefined)}
                                      className="bg-brand-secondary text-gray-600 py-1.5 rounded  w-full"
                                    >
                                      Cancel
                                    </button>

                                    <button
                                      type="submit"
                                      onClick={() => setFilterName(undefined)}
                                      className="bg-brand-light text-white py-1.5 rounded w-full"
                                    >
                                      Apply
                                    </button>
                                  </div>
                                </section>
                              </div>
                            )}
                          </li>

                          <li className="relative list-none ">
                            <button
                              className="search-filter-label"
                              onClick={() => setFilterName("pricing")}
                              type="button"
                            >
                              <span>Any Price</span>
                              <span className="arrow-down"> </span>
                            </button>

                            {showFilter.pricing && (
                              <div className="absolute  z-20  py-2  top-[3.6rem] max-w-[700px] rounded-lg shadow-md bg-white  w-[400px] px-4 ">
                                <section className="relative w-full h-full pt-2 ">
                                  <div className="w-full pr-64 ">
                                    <h3 className="text-[0.8rem] text-gray-500 font-bold mb-3 uppercase">
                                      Task price
                                    </h3>
                                  </div>
                                </section>
                                <div className="px-5 mt-8 space-y-6 ">
                                  <p className="text-center text-[1rem] font-semibold text-gray-500 ">
                                    &#8358; {values.range[0]} - &#8358;{" "}
                                    {values.range[1]}
                                  </p>

                                  <Range name="range" />
                                </div>
                                <div className="flex items-center justify-between mx-6 mt-16 mb-2 space-x-3 ">
                                  <button
                                    type="button"
                                    onClick={() => setFilterName(undefined)}
                                    className="bg-brand-secondary text-gray-600 py-1.5 rounded  w-full"
                                  >
                                    Cancel
                                  </button>

                                  <button
                                    type="submit"
                                    onClick={() => setFilterName(undefined)}
                                    className="bg-brand-light text-white py-1.5 rounded w-full"
                                  >
                                    Apply
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>

                          <li className="relative list-none ">
                            <button
                              type="button"
                              className=" search-filter-label"
                              onClick={() => setFilterName("sort")}
                            >
                              <span>Sort</span>
                              <span className="arrow-down"> </span>
                            </button>

                            {showFilter.sort && (
                              <div className="absolute  z-20  py-2  top-[3.6rem] max-w-[700px] rounded-lg shadow-md bg-white  w-[400px] ">
                                <section className="relative w-full ml-6 mr-10 ">
                                  <div className="w-full pr-64 ">
                                    <h3 className="text-[0.8rem] text-gray-500 font-bold mb-3 uppercase">
                                      Sort By
                                    </h3>
                                  </div>
                                </section>

                                <div className="w-full px-3 ">
                                  <div className="mt-3 rounded-md ">
                                    <CustomRadio
                                      name="sort"
                                      checked={values.sort}
                                      options={items}
                                      style={`flex flex-col  items-center w-full   `}
                                      renderItem={(
                                        name,
                                        idx,
                                        value,
                                        icon,
                                        checked
                                      ) => (
                                        <button
                                          key={idx}
                                          type="button"
                                          className={`${
                                            checked
                                              ? "bg-brand-secondary text-white"
                                              : ""
                                          } py-3 px-6 w-full text-left hover:bg-green-50 select-none cursor-pointer rounded-md `}
                                        >
                                          <span className="py-2 text-[1rem]  font-medium text-gray-700">
                                            {name}
                                          </span>
                                        </button>
                                      )}
                                    />
                                  </div>

                                  <div className="flex items-center justify-between mx-6 mt-8 mb-2 space-x-3 ">
                                    <button
                                      type="button"
                                      onClick={() => setFilterName(undefined)}
                                      className="bg-brand-secondary text-gray-600 py-1.5 rounded  w-full"
                                    >
                                      Cancel
                                    </button>

                                    <button
                                      type="submit"
                                      onClick={() => setFilterName(undefined)}
                                      className="bg-brand-light text-white py-1.5 rounded w-full"
                                    >
                                      Apply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                          <li className="relative list-none ">
                            <button
                              type="button"
                              className=" search-filter-label"
                              onClick={() => setFilterName("status")}
                            >
                              <span>Status</span>
                              <span className="arrow-down"> </span>
                            </button>

                            {showFilter.status && (
                              <div className="absolute  z-20  py-2  top-[3.6rem] max-w-[700px] rounded-lg shadow-md bg-white  w-[400px] ">
                                <section className="relative w-full ml-6 mr-10 ">
                                  <div className="w-full pr-64 ">
                                    <h3 className="text-[0.8rem] text-gray-500 font-bold mb-3 uppercase">
                                      Status filter
                                    </h3>
                                  </div>
                                </section>

                                <div className="w-full px-6 my-6 ">
                                  <div className="mt-3 rounded-md ">
                                    <ul className="flex flex-col space-y-6 list-none">
                                      <li className="flex flex-row items-center justify-between ">
                                        <div>
                                          <h3 className="text-[1rem] font-semibold">
                                            Available tasks
                                          </h3>
                                          <span className="text-[.75rem] ">
                                            Hide tasks that have been assigned
                                          </span>
                                        </div>
                                        <Toggle name="assigned" />
                                      </li>
                                      <li className="flex flex-row items-center justify-between ">
                                        <div>
                                          <h3 className="text-[1rem] font-semibold">
                                            Tasks with no offers{" "}
                                          </h3>
                                          <span className="text-[.75rem]">
                                            Show only tasks without offers
                                          </span>
                                        </div>
                                        <Toggle
                                          setFieldValue={setFieldValue}
                                          name="zeroOffers"
                                        />
                                      </li>
                                    </ul>
                                    <div className="flex items-center justify-between mx-6 mt-8 mb-2 space-x-3 ">
                                      <button
                                        type="button"
                                        onClick={() => setFilterName(undefined)}
                                        className="bg-brand-secondary text-gray-600 py-1.5 rounded  w-full"
                                      >
                                        Cancel
                                      </button>

                                      <button
                                        type="submit"
                                        onClick={() => setFilterName(undefined)}
                                        className="bg-brand-light text-white py-1.5 rounded w-full"
                                      >
                                        Apply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Mobile Filters */}
                    <MobileFilter />
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

                {newTaskCount > 0 ? (
                  <div className="sticky z-30 mx-2 text-center top-3">
                    <button
                      onClick={handleRefresh}
                      type="button"
                      className=" text-white w-48 bg-green-500 font-semibold py-2 text-[.8rem]  rounded uppercase    "
                    >
                      <span>{newTaskCount} new tasks</span>
                    </button>
                  </div>
                ) : null}

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

                {loginShow && pageInfo?.count > 9 && (
                  <div className="pb-4">
                    {!isLoggedIn ? (
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-[.8rem] font-medium text=brand-text-deep pb-4 ">
                          To see more tasks ?
                        </p>
                        <div className="flex flex-row items-center space-x-3 text-[.75rem]">
                          <button className="px-4 py-2 font-semibold text-white rounded-full bg-brand-light/90  ">
                            Join Primetasker
                          </button>
                          <p className="font-medium">or</p>
                          <button className="px-5 py-2 font-semibold text-green-800 rounded-full bg-green-50 ">
                            Log In
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                )}
              </section>

              <section className="relative w-full h-screen overflow-x-hidden  md:w-1/2 lg:w-2/3 ">
                <div className="absolute top-0 bottom-0 left-0 right-0 z-0 hidden w-full h-full overflow-x-hidden md:block flex-1 ">
                  <MapContainer coordinates={coordinates} tasks={markers} />
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

export default TaskSidebar;
