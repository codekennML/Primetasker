import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineEnvironment,
} from "react-icons/ai";
import TaskFilters, { allCategories, items } from "./TaskFilters.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import millify from "millify";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useGetTasksQuery } from "../slices/taskApiSlice.js";
import useAuth from "../../../hooks/useAuth.js";
import { formatDate } from "../../../utils/formatDate.js";
import Spinner from "../../../utils/Spinner.jsx";
import Map from "../Map.jsx";
import CustomCheckbox from "../../../utils/CustomFieldComp/CustomCheckbox";
import { Formik, Form, FieldArray } from "formik";
import CustomText from "../../../utils/CustomFieldComp/CustomText";
import { FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import { showModal } from "../../modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomRadio from "../../../utils/CustomFieldComp/CustomRadioCheck";
import { AiFillCheckCircle } from "react-icons/ai";
import { Range, SingleRange } from "../../../utils/Range.jsx";
import Toggle from "../../../utils/CustomToggle";
import AutoCompleteMap from "../utils/AutoCompleteMap.jsx";
import { clearNotifis } from "../slices/taskSlice.js";

// const RadioDesign = ({ name, idx }) => {
//   return (
//     <div className="py-2">
//       <p>{name}</p>
//     </div>
//   );
// };

let filters = {
  category: false,
  pricing: false,
  location: false,
  status: false,
  sort: false,
};

const TaskSidebar = () => {
  const [userLocation, setUserLocation] = useState(undefined);
  const [initialFormData, setInitialFormData] = useState({
    search: "",
    categories: [],
    taskType: "All",
    range: [5000, 1000000],
    sort: "createdAt:-1",
    location: {},
    maxDistance: [0, 50],
    assigned: false,
    zeroOffers: false,
  });

  const { userLoggedIn: isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const [fetchAgain, setFetchAgain] = useState(false);
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
  const [newTasks, setNewTasks] = useState(0);

  const {
    data: taskData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetTasksQuery({
    page: currentPage,
    ...query,
  });

  useEffect(() => {
    let userLocation;
    const getUserLocation = async () => {
      const response = await fetch(
        "https://geolocation-db.com/json/67273a00-5c4b-11ed-9204-d161c2da74ce"
      );
      const location = await response.json();

      userLocation = {
        place: `${(location?.city, location?.state)}`,
        lng: location?.longitude,
        lat: location?.latitude,
      };
    };
    getUserLocation();

    console.log(userLocation);

    setInitialFormData((prev) => ({ ...prev, location: userLocation }));
  }, []);

  console.log(initialFormData);
  //Normal task fetch per page container , updates and appends tasks on downward scroll
  useEffect(() => {
    if (taskData && !fetchAgain) {
      const { ids, entities, pageData, newCount } = taskData;

      setPageInfo(pageData);
      setNewTasks(newCount);

      setTasks((prev) => {
        return [...prev, ...ids.map((id) => entities[id])];
      });
      setLoadFilter(false);
    }
    //cleanup the component if the user navigates away to avoid re-adding stale data
    return () => setTasks([]);
  }, [taskData]);

  const handleChange = () => {
    isLoggedIn ? setCurrentPage((prev) => prev + 1) : setLoginShow(true);
  };

  const handleRefresh = () => {
    // setNewTasks(0);
    dispatch(clearNotifis());
  };

  const renderTasks =
    tasks.length > 0 ? (
      tasks.map((task, idx) => {
        return (
          <li
            className="bg-white px-4  rounded-lg cursor-pointer pt-3 pb-1 border-l-[1px] shadow-md hover:shadow-lg shadow-purple-50 "
            key={idx}
          >
            <Link
              to={`${task.title.replace(/ /g, "-")}-${task.id}`}
              onClick={() => setOpen(true)}
            >
              <div className="flex justify-between px-3 ">
                <div className="flex-1 flex-wrap space-y-2">
                  <p className="text-[15px] font-roboto font-semibold text-slate-800/70 text-left  tracking-tight">
                    {task.title}
                  </p>
                  <ul className="text-[14px] space-y-0.5 my-2 ">
                    <li className=" rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px] ">
                      <p>
                        <AiOutlineCalendar />
                      </p>
                      <p className="text-[12px] capitalize">
                        {" "}
                        {formatDate(task.taskEarliestDone, "EEEE dd LLL")}
                      </p>
                    </li>
                    <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                      <p>
                        <AiOutlineClockCircle />
                      </p>
                      <p className="text-[12px] capitalize">
                        {" "}
                        {/* {formatDate(task.taskEarliestDone, "HH:mm")} */}
                        {task.taskTime}
                      </p>
                    </li>
                    <li className="rounded-lg flex items-center text-gray-500/90 font-medium space-x-2 text-[12px]">
                      <p>
                        <AiOutlineEnvironment />
                      </p>
                      <p className="text-[12px] capitalize ">
                        {task.taskType === "Physical"
                          ? task.location
                          : "Remote"}
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="pl-2.5 flex flex-col justify-start">
                  <p className="justify-end text-[16.5px] text-purple-900 font-semibold text-center inline-flex items-center">
                    <span className="text-[16px] font-semibold tracking-wide">
                      &#8358;{millify(Math.floor(Number(task.budget)), 2)}
                    </span>
                  </p>
                  <div className="flex-1 justify-center items-center flex ">
                    <img
                      src={
                        task.creator_details?.Avatar
                          ? task.creator_details.Avatar
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      }
                      alt={`${task.title}-prime-task-image-${idx}`}
                      className="align-end w-[50px] h-[50px] object-cover object-fit rounded-full mt-4"
                    />
                  </div>
                </div>
              </div>
              <div className="border-t py-0.5 mt-2">
                <ul className="flex items-center text-[15px] font-medium text-gray-500 space-x-2">
                  <li className="flex items-center  ">
                    <p className="text-[13px] text-purple-700 capitalize">
                      {task.status}
                    </p>
                  </li>
                  <li className="text-[20px]">&middot;</li>
                  <li className="text-[13px]">
                    {task?.offerCount || 0} offers
                  </li>
                </ul>
              </div>
            </Link>
          </li>
        );
      })
    ) : !loadFilter && tasks.length < 1 ? (
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
  }, [filterName]);

  const handleSubmit = (values) => {
    // const stringifiedValues = JSON.stringify(values);
    const stringifiedLocation = JSON.stringify(values.location);
    values.location = stringifiedLocation;
    setTasks([]);
    setLoadFilter(true);
    //trigger map disappearance everytime search is launched
    setCloseMap((prev) => !prev);

    setQuery((prev) => {
      return { ...prev, ...values };
    });
  };

  const closeButton = (
    <button
      onClick={() => setFilterName(undefined)}
      type="button"
      className="text-purple-500 absolute top-1 right-16   rounded-lg text-sm px-2 py-1 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <FaTimes />
    </button>
  );

  return (
    <>
      <section className=" overflow-hidden h-screen relative   ">
        <div
          onClick={() => setFilterName(undefined)}
          className={`bg-white z-40  relative  border-y mt-14 after:absolute after:h-screen after:w-screen after:justify-center after:items-center after:flex ${
            loadFilter ? "after:bg-neutral-200/30" : "after:bg-slate-700/40"
          }
           ${filterName || loadFilter ? "after:visible " : "after:hidden"}`}
        >
          <Formik
            enableReinitialize={true}
            initialValues={initialFormData}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              // resetForm();
              // setFilterName(undefined);
            }}
            className="bg-gray-600"
          >
            {({ values }) => {
              return (
                <Form
                  onClick={(e) => e.stopPropagation()}
                  className=" rounded-lg flex w-[80%] mx-auto justify-start space-x-10 items-center "
                >
                  {/* <li className="list-none">
                    2 results found for search (categories(4) )
                  </li> */}
                  <div className="relative rounded-lg ">
                    <CustomText
                      name="search"
                      labelstyle={`hidden`}
                      imgAfter={<FaSearch />}
                      wrapperclass={`relative `}
                      inputstyle={`w-72  py-2.5 rounded-full   outline-none text-[12px]  h-full  caret-indigo-400 dark:caret-gray-300 bg-gray-100  pr-8 dark:bg-gray-700  outline-none  border-purple-100 dark:border-gray-600  dark:text-gray-400 placeholder:text-[14px] placeholder:text-gray-500 indent-3  w-full text-xs font-medium text-gray-700 border  `}
                      placeholder="Search for tasks"
                      adornment={`text-[0.8rem] text-gray-400 font-thin dark:text-gray-400 absolute top-[37%] right-[4.5%]  z-10  `}
                    />
                  </div>
                  {isLoading && (
                    <div className="">
                      <Spinner visible width={50} height={30} color="purple" />
                    </div>
                  )}
                  <ul className="flex items-center ">
                    <li className="relative list-none select-none ">
                      <button
                        type="button"
                        onClick={() => setFilterName("category")}
                        className=" flex items-center w-full space-x-2 text-[0.9rem] font-semibold text-gray-500 hover:bg-purple-100 hover:rounded-full p-1 px-3 cursor-pointer"
                      >
                        <span>
                          {" "}
                          {values.categories.length > 1
                            ? `${values.categories[0]} and ${
                                Number(values.categories.length) - 1
                              } more`
                            : values.categories.length < 1
                            ? "Categories"
                            : `${values.categories[0]}`}{" "}
                        </span>
                        <span className="arrow-down"></span>
                      </button>

                      {showFilter.category && (
                        <div className=" absolute top-12 left-0 border-t-3  w-[700px] h-[450px] rounded-lg  shadow-xl border-purple-800 bg-white py-2 px-6 z-40 ">
                          <section className="relative ">
                            {closeButton}
                            <div className="flex justify-between  ">
                              <p className="py-2 text-sm text-purple-800 font-semibold ">
                                Filter Categories <p>{showFilter.category}</p>
                              </p>
                            </div>
                            <ul
                              className="first:my-0  grid grid-cols-2  w-full max-h-[330px] overflow-y-scroll px-4"
                              aria-labelledby="mega-menu-dropdown-button overflow-y-scroll "
                            >
                              <FieldArray name="categories">
                                {(arrayHelpers) => (
                                  <>
                                    {allCategories.map((category, index) => (
                                      <CustomCheckbox
                                        key={index}
                                        type="checkbox"
                                        name="categories"
                                        className="w-5 h-5 my-3 accent-purple-700 cursor-pointer"
                                        labelstyle={`text-[15px] font-medium text-gray-600`}
                                        label={category}
                                        value={category}
                                        checked={values.categories.includes(
                                          category
                                        )}
                                        onChange={(e) => {
                                          if (e.target.checked) {
                                            arrayHelpers.push(category);
                                          } else {
                                            const idx =
                                              values.categories.indexOf(
                                                category
                                              );
                                            arrayHelpers.remove(idx);
                                          }
                                        }}
                                      />
                                    ))}
                                  </>
                                )}
                              </FieldArray>
                            </ul>
                          </section>

                          <div className="flex justify-between items-center mx-6 my-4 ">
                            <button
                              onClick={() => setFilterName(undefined)}
                              className="bg-purple-100 text-gray-600 py-1.5 rounded  px-6"
                              type="button"
                            >
                              Cancel
                            </button>

                            <button
                              onClick={() => setFilterName(undefined)}
                              type="submit"
                              className="bg-purple-600 text-white py-1.5 rounded px-6"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      )}
                    </li>

                    <li className="relative list-none select-none">
                      <button
                        type="button"
                        onClick={() => setFilterName("location")}
                        className=" flex items-center w-full space-x-2 text-[0.9rem] font-semibold text-gray-500 hover:bg-purple-100 hover:rounded-full p-1 px-3 cursor-pointer"
                      >
                        <span>Any location</span>
                        <span className="arrow-down"></span>
                      </button>

                      {showFilter.location && (
                        <div className=" absolute top-12 left-0 border-t-3    rounded-lg overflow-hidden border-purple-800 bg-white mx-20  py-2  z-40 shadow-md">
                          <section className="w-full ml-6 mr-16 relative   ">
                            {closeButton}
                            <div className=" w-full pr-16 mt-6">
                              <h3 className="text-[0.8rem] text-gray-500 font-bold mb-3 uppercase">
                                To be done
                              </h3>
                              <div className=" rounded-md pb-4  py-1 ">
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
                                  style={`flex  flex-row mt-2 justify-between items-center w-full  px-2 space-x-2 `}
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
                                            ? "bg-purple-800 text-white border-0"
                                            : "bg-gray-50 text-gray-500"
                                        } relative  px-2 w-full flex-1   text-center  rounded-lg py-4 flex flex-col items-center justify-center border border-purple-500 cursor-pointer`}
                                      >
                                        <p
                                          className={`${
                                            checked
                                              ? "bg-purple-800 text-white border-0"
                                              : "hidden"
                                          }`}
                                        >
                                          <AiFillCheckCircle className="text-[20px] font-medium absolute top-2 right-2" />
                                        </p>

                                        {/* <p className="text-[1.2rem] font-medium mt-2">
                                          {value}
                                        </p> */}
                                        <p className="text-[0.9rem] font-semibold  px-4">
                                          {name}
                                        </p>
                                      </div>
                                    );
                                  }}
                                />
                              </div>

                              <div className="mt-2">
                                <h3 className="text-[0.8rem] text-gray-500 font-bold mb-3 uppercase">
                                  {" "}
                                  Where ?{" "}
                                </h3>

                                <AutoCompleteMap
                                  name="location"
                                  values={values.location}
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
                          </section>

                          <div className="flex justify-between items-center mx-6 my-6 mt-8 ">
                            <button
                              type="button"
                              onClick={() => setFilterName(undefined)}
                              className="bg-purple-100 text-gray-600 py-1.5 rounded  px-6"
                            >
                              Cancel
                            </button>

                            <button
                              type="submit"
                              onClick={() => setFilterName(undefined)}
                              className="bg-purple-600 text-white py-1.5 rounded px-6"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      )}
                    </li>

                    <li className="relative list-none ">
                      <button
                        className=" flex items-center space-x-2 text-[0.9rem] font-semibold  text-gray-500 hover:bg-purple-100 hover:rounded-full p-1 px-3 cursor-pointer select-none"
                        onClick={() => setFilterName("pricing")}
                        type="button"
                      >
                        <span>Any Price</span>
                        <span className="arrow-down"> </span>
                      </button>

                      {showFilter.pricing && (
                        <div className=" absolute top-12 left-0 border-t-3    rounded-lg overflow-hidden border-purple-800 bg-white   py-2  z-40 shadow-md">
                          <section className="w-full ml-6 mr-10 pt-2 relative ">
                            {closeButton}
                            <div className=" w-full pr-64 ">
                              <h3 className="text-[0.8rem] text-gray-500 font-bold mb-3 uppercase">
                                Task price
                              </h3>
                            </div>
                          </section>
                          <div className="px-5 space-y-6 mt-8 ">
                            <p className="text-center text-[1rem] font-semibold text-gray-500 ">
                              &#8358; {values.range[0]} - &#8358;{" "}
                              {values.range[1]}
                            </p>

                            <Range name="range" />
                          </div>
                          <div className="flex justify-between items-center mx-6 mt-10 mb-3 ">
                            <button
                              type="button"
                              onClick={() => setFilterName(undefined)}
                              className="bg-purple-100 text-gray-600 py-1.5 rounded  px-6"
                            >
                              Cancel
                            </button>

                            <button
                              type="submit"
                              onClick={() => setFilterName(undefined)}
                              className="bg-purple-600 text-white py-1.5 rounded px-6"
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
                        className=" flex items-center space-x-2 text-[0.9rem] font-semibold  text-gray-500 hover:bg-purple-100 hover:rounded-full p-1 px-3 cursor-pointer select-none"
                        onClick={() => setFilterName("sort")}
                      >
                        <span>Sort</span>
                        <span className="arrow-down"> </span>
                      </button>

                      {showFilter.sort && (
                        <div className=" absolute top-12 left-0 border-t-3    rounded-lg overflow-hidden border-purple-800 bg-white   py-2  z-40 shadow-md">
                          <section className="w-full ml-6 mr-10 relative  ">
                            {closeButton}
                            <div className=" w-full pr-64 ">
                              <h3 className="text-[0.8rem] text-gray-500 font-bold mb-3 uppercase">
                                Sort By
                              </h3>
                            </div>
                          </section>

                          <div className=" w-full px-3">
                            <div className=" rounded-md mt-3">
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
                                      checked ? "bg-purple-100 text-white" : ""
                                    } py-3 px-6 w-full text-left hover:bg-purple-50 select-none cursor-pointer rounded-md `}
                                  >
                                    <span className="py-2 text-[1rem]  font-medium text-gray-700">
                                      {name}
                                    </span>
                                  </button>
                                )}
                              />
                            </div>
                            <div className="flex justify-between items-center mx-6 mt-4 mb-3 ">
                              <button
                                type="button"
                                onClick={() => setFilterName(undefined)}
                                className="bg-purple-100 text-gray-600 py-1.5 rounded  px-6"
                              >
                                Cancel
                              </button>

                              <button
                                type="submit"
                                onClick={() => setFilterName(undefined)}
                                className="bg-purple-600 text-white py-1.5 rounded px-6"
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
                        className=" flex items-center space-x-2 text-[0.9rem] font-semibold  text-gray-500 hover:bg-purple-100 hover:rounded-full p-1 px-3 cursor-pointer select-none"
                        onClick={() => setFilterName("status")}
                      >
                        <span>Status</span>
                        <span className="arrow-down"> </span>
                      </button>

                      {showFilter.status && (
                        <div className=" absolute top-12 left-0 border-t-3    rounded-lg overflow-hidden border-purple-800 bg-white   py-2  z-40 shadow-md">
                          <section className="w-full ml-6 mr-10 relative  ">
                            {closeButton}
                            <div className=" w-full pr-64 ">
                              <h3 className="text-[0.8rem] text-gray-500 font-bold mb-3 uppercase">
                                Status filter
                              </h3>
                            </div>
                          </section>

                          <div className=" w-full  my-6 px-6">
                            <div className=" rounded-md mt-3 ">
                              <ul className="flex flex-col list-none space-y-6">
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
                                  <Toggle name="zeroOffers" />
                                </li>
                              </ul>
                              <div className="flex justify-between items-center mx-6 mt-8 mb-2 ">
                                <button
                                  type="button"
                                  onClick={() => setFilterName(undefined)}
                                  className="bg-purple-100 text-gray-600 py-1.5 rounded  px-6"
                                >
                                  Cancel
                                </button>

                                <button
                                  type="submit"
                                  onClick={() => setFilterName(undefined)}
                                  className="bg-purple-600 text-white py-1.5 rounded px-6"
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
                </Form>
              );
            }}
          </Formik>
        </div>

        {loadFilter && (
          <div className="z-50 absolute transform translate translate-x-1/2 left-1/2 translate-y-1/2 top-1/2 ">
            <Spinner visible width={70} height={70} color="purple" />
          </div>
        )}

        {!isLoading && !isError ? (
          <section className="max-w-screen-xl mx-auto">
            <div className=" relative justify-start   flex  ">
              <section
                id="scrollableDiv"
                className={` w-full lg:w-1/3  h-[calc(100vh_-_80px)]    scrollbar-thin scrollbar-thumb-gray-400/30 scrollbar-track-gray-300 overflow-x-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full pl-6 pr-5 space-y-4  `}
              >
                {/* <TaskFilters /> */}

                <InfiniteScroll
                  dataLength={tasks.length}
                  scrollableTarget="scrollableDiv"
                  next={handleChange}
                  hasMore={Number(pageInfo.page) < Number(pageInfo.pages)}
                  loader={
                    <>
                      {tasks.length > 0 ? (
                        <Spinner
                          height={20}
                          width={20}
                          visible={true}
                          color="purple"
                          position="justify-center"
                        />
                      ) : null}
                    </>
                  }
                >
                  <div className=" mx-2 text-center left-[25%] sticky top-4 pb-6">
                    <button
                      onClick={handleRefresh}
                      type="button"
                      className=" text-white w-40 bg-purple-600 font-semibold py-2 text-[.8rem]  rounded uppercase    "
                    >
                      <span>{newTasks} new tasks</span>
                    </button>
                  </div>

                  <div className="space-y-4 list-none pt-4 pb-8">
                    {renderTasks}
                  </div>
                </InfiniteScroll>

                {/* {!loginShow && (
                  <div className="">Login to view more conversations</div>
                )} */}
              </section>

              <section className="lg:flex-1  w-full lg:w-2/3 relative overflow-x-hidden ">
                {/* <p>Micxoreoe</p> */}

                <Outlet context={[open, setOpen, closeMap]} />
              </section>
            </div>
          </section>
        ) : null}
      </section>
    </>
  );
};

export default TaskSidebar;
