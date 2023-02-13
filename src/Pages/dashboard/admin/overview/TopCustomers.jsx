import Select from "../../../../utils/CustomSelect";
import { useState } from "react";
import { useGetTopCustomersQuery } from "../../../../features/stats/customerStats";
import millify from "millify";
import Spinner from "../../../../utils/Spinner";
import { Formik, Form } from "formik";
const options = [
  "Today",
  "Last Week",
  "Last Month",
  "Last Quarter",
  "This Year",
];

const TopCustomers = () => {
  const {
    data: topCustomers,
    isLoading,
    isSuccess,
    isError,
  } = useGetTopCustomersQuery();

  let content;
  if (isSuccess) {
    const { ids, entities } = topCustomers;

    let topCustomersStats = [...ids.map((id) => entities[id])];

    content = topCustomersStats.map((customerStat, idx) => {
      return (
        <li
          key={idx}
          className=" px-2  py-2 flex flex-row justify-between items-center  text-[15px] py-2 border-t  border-gray-100 dark:border-gray-700"
        >
          <figure className="flex flex-row items-center flex-1">
            <img
              src={`${customerStat.avatar}`}
              alt=""
              className="w-[35px] h-[35px] rounded-full object-cover object-fit"
            />
            <h3 className="pl-2 text-[12px]  text-gray-500/80 font-semibold dark:text-gray-400 tracking-wide">
              {customerStat.id}
            </h3>
          </figure>

          <article className="">
            <div className="  text-gray-500 ">
              <div className="inline-flex items-center space-x-2 text-[11px]">
                <p className="text-gray-700 font-semibold flex flex-row space-x-1 ">
                  <span className="text-center text-blue-500 dark:text-gray-400">
                    {customerStat.completed}
                  </span>{" "}
                  <span className="text-gray-400">Complete</span>
                </p>
                <p className="text-[20px] text-green-600"> &middot; </p>
                <p className="text-gray-700 font-semibold  pr-2 flex flex-row space-x-1">
                  <span className="text-center text-green-500">
                    {" "}
                    {`₦ ${millify(customerStat.revenue, {
                      precision: 0,
                      lowercase: true,
                    })}`}
                  </span>{" "}
                  <span className="text-gray-400">Revenue</span>
                </p>
                <p className="text-[20px] text-green-600"> &middot; </p>
                <p className="text-gray-700 font-semibold  pr-2 flex flex-row space-x-1">
                  <span className="text-center text-orange-500">
                    {" "}
                    {`₦ ${millify(customerStat.commissions, {
                      precision: 0,
                      lowercase: true,
                    })}`}
                  </span>{" "}
                  <span className="text-gray-400">Commissions</span>
                </p>
              </div>
            </div>
          </article>
        </li>
      );
    });
  }

  const [selected, setSelected] = useState(options[0]);
  return (
    <article className="flex-1">
      <section className=" ">
        <div className=" rounded-lg  px-4  border dark:border-gray-600 shadow-md bg-white dark:bg-gray-800 h-full ">
          <article className="flex justify-between items-center mt-2">
            <h2 className="  font-semibold dark:text-purple-400 text-purple-700 text-[15px]">
              Top customers
            </h2>
            <Formik initialValues={{ topCust: selected }}>
              {() => {
                return (
                  <Form>
                    <div className="relative ">
                      <Select
                        name="topCust"
                        selected={selected}
                        setSelected={setSelected}
                        items={options}
                        width={`w-full`}
                        style={`py-2 text-[16px] bg-gray-50`}
                      />
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </article>

          <article className=" text-[13px] font-medium   ">
            <ul className=" pt-2  pb-1 last:border-b-none">
              {isSuccess ? (
                content
              ) : (
                <li className="flex justify-center items-center">
                  <Spinner />
                </li>
              )}
            </ul>
          </article>
        </div>
      </section>
    </article>
  );
};

export default TopCustomers;
