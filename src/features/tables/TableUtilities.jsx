import { Formik, Form } from "formik";
import { FaChartBar, FaRegEdit, FaRegTrashAlt, FaSearch } from "react-icons/fa";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { MdFilterList } from "react-icons/md";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiSortDescending,
} from "react-icons/hi";
import { useMemo, useState, useEffect } from "react";
import {
  AiOutlineCloudDownload,
  AiOutlineUserAdd,
  AiOutlineCheckCircle,
  AiOutlineReconciliation,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { HiChevronUpDown } from "react-icons/hi2";
// import { openModal } from "../modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { CSVLink } from "react-csv";
import TableData from "./BasicTable";
import CustomText from "../../utils/CustomFieldComp/CustomText";
import CustomSelect from "../../utils/CustomFieldComp/CustomSelect";
import StatCard from "../../utils/StatCard";
import GeneralModal from "../modal/GeneralModal";
import ModalContent from "../modal/ModalContent";
import MyModal from "../../utils/Dialog";
import { useLocation } from "react-router-dom";

import { showModal, hideModal } from "../modal/modalSlice";

const TableUtilities = ({
  fetchData,
  headers,
  filterList,
  sortList,
  tableTitle,
  searchTitle,
}) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState();
  const [sort, setSort] = useState();
  const [searchQuery, setSearchQuery] = useState();

  const [params, setParams] = useState({
    search: undefined,
    filter: undefined,
    sort: undefined,
  });

  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);

  const modalStatus = useSelector((state) => state.modal.openModalStatus);

  const onSubmit = (values, actions) => {
    values.searchQuery?.length
      ? setParams((prev) => ({
          ...prev,
          search: values.searchQuery,
        }))
      : setParams((prev) => ({
          ...prev,
          search: "",
        }));
  };

  const onSort = (sort) => {
    sort
      ? setParams((prev) => ({
          ...prev,
          sort: sort,
        }))
      : setParams((prev) => ({
          ...prev,
          sort: "",
        }));
  };

  const onFilter = (filter) => {
    filter
      ? setParams((prev) => ({
          ...prev,
          filter: filter,
        }))
      : setParams((prev) => ({
          ...prev,
          filter: "",
        }));
  };

  const handleCreate = () => {
    setClicked((prev) => !prev);
    dispatch(openModal());
  };

  let content;
  // CREATE USER ON CLICK
  // if (modalStatus) {
  //   content = (
  //     <GeneralModal>
  //       <ModalContent modalTitle={`Create User`} />
  //     </GeneralModal>
  //   );
  // }
  // console.log(showModal);
  return (
    <div>
      <section className="">
        {content}
        <article className=" mb-6 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 lg:grid-rows-1 gap-x-4 gap-y-4 mt-3  rounded-lg ">
          {/* <MyModal /> */}
          <StatCard
            Svg={
              <FaChartBar className="font-medium w-16 h-12  text-gray-700 " />
            }
            currSymbol={`₦`}
            title="Commissions"
            mainAmt={`2,500,000`}
            changePercent={`16`}
            changeAmount={`89k`}
            timeframe={`today`}
          />
          <StatCard
            Svg={
              <AiOutlineShoppingCart className="font-medium w-16 h-12  text-gray-700 " />
            }
            title="Bookings"
            mainAmt={`2,500,000`}
            changePercent={`16`}
            changeAmount={`89k`}
            timeframe={`today`}
          />
          <StatCard
            Svg={
              <AiOutlineReconciliation className="font-medium w-16 h-12  text-gray-700 " />
            }
            title="Transactions"
            mainAmt={`2,500`}
            changePercent={`16`}
            changeAmount={`89k`}
            timeframe={`today`}
          />
          <StatCard
            Svg={
              <AiOutlineUser className="font-medium w-16 h-12  text-gray-700 " />
            }
            title="Users"
            mainAmt={`25,000`}
            changePercent={`16`}
            changeAmount={`89k`}
            timeframe={`today`}
          />{" "}
        </article>
      </section>

      <section className="hidden mt-6">
        <header className="hidden mt-4 pr-5 bg-white  dark:bg-gray-800 pl-4 py-2  flex items-center justify-between dark:border-none ">
          <div className="flex flex-1 items-center justify-between  values-center space-x-1.5 w-full mt-1 ">
            <h3 className="font-semibold text-gray-700  text-[19px] pr-8 pl-4">
              {tableTitle}
            </h3>
            <div className=" ">
              {/* TABLE HEADERS (FILTERS , SORT, EXPORT , SEARCH) */}
              <Formik
                initialValues={{
                  searchQuery: "",
                  sort: "",
                  filter: "",
                }}
                onSubmit={onSubmit}
              >
                {({ values }) => (
                  <Form className="flex flex-row items-center space-x-4  w-full ">
                    <div className=" relative">
                      <CustomText
                        name="searchQuery"
                        labelstyle={`hidden`}
                        imgBfr={<FaSearch />}
                        wrapperclass={`relative `}
                        inputstyle={` w-64 bg-transparent outline-none text-[13px] caret-indigo-400 dark:caret-gray-300  dark:bg-gray-700   outline-none  border-gray-400 dark:border-gray-600 text-white dark:text-gray-400 placeholder:text-gray-400 py-2 rounded-md bg-gray-50 focus:bg-gray-50  w-full text-xs `}
                        placeholder={searchTitle}
                        svgclassName={`text-[13px] text-gray-400 font-thin dark:text-gray-400 absolute top-[28%] left-[4%]  z-10 `}
                      />
                    </div>

                    <div className=" flex values-center  px-2  rounded-md    ">
                      <CustomSelect
                        imgBfr={
                          <MdFilterList className="text-[20px] font-bold" />
                        }
                        selectArray={filterList}
                        name="filter"
                        // value={filter}
                        selectstyle={` text-white bg-white  rounded-lg text-gray-600   text-[13px] hover:bg-purple-500`}
                        onChange={(value) => onFilter(value)}
                      />
                    </div>

                    <div className="relative flex values-center px-2 rounded-md      ">
                      <CustomSelect
                        imgBfr={
                          <HiSortDescending className="text-[20px] font-bold" />
                        }
                        selectArray={sortList}
                        value={sort}
                        name="sort"
                        onChange={(sort) => onSort(sort)}
                        selectstyle={` text-white bg-white  hover:bg-purple-500  text-[13px]`}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          <div className="space-x-3 flex ">
            {
              <CSVLink
                data={data}
                filename={"my-file.csv"}
                className="btn btn-primary"
                target="_blank"
              >
                <button className=" mr-4 flex values-center py-2 px-3 ml-2 text-[13px]  font-medium text-gray-700   dark:border-gray-600  rounded-lg bg-white focus:outline-none  dark:bg-transparent dark:hover:bg-gray-600 dark:text-white">
                  <span className="pr-2 text-[10px] ">
                    <AiOutlineCloudDownload className="text-lg " />
                  </span>
                  Export
                </button>
              </CSVLink>
            }

            {
              <button
                onClick={() => dispatch(showModal("addUser"))}
                className="mr-4 flex values-center py-2 px-3 ml-2 text-[13px] font-medium  text-gray-600 dark:border-gray-600   rounded-lg  bg-white focus:outline-none  dark:bg-transparent dark:hover:bg-gray-600 dark:text-white"
              >
                <span className="pr-2 text-[10px]">
                  <AiOutlineUserAdd className="text-lg " />
                </span>
                Add New User
              </button>
            }
          </div>
        </header>
      </section>

      <TableData params={params} headers={headers} fetchData={fetchData} />
    </div>
  );
};

export default TableUtilities;
