import Select from "../../../../utils/CustomSelect";
import { useState } from "react";
import { useGetTopCategoriesQuery } from "../../../../features/categories/slices/categoryApiSlice";
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

const TopCategories = () => {
  const [selected, setSelected] = useState(options[0]);

  const { data, isLoading, isFetching, isSuccess } = useGetTopCategoriesQuery();

  let content;

  if (isSuccess) {
    const { ids, entities } = data;

    let categoryStats = [...ids.map((id) => entities[id])];

    content = categoryStats.map((category, idx) => {
      return (
        <li
          key={idx}
          className="border-b py-2.5  dark:border-gray-700 last:border-b-0"
        >
          <article className="flex justify-between items-center">
            <div className="flex space-x-2 items-center">
              <img
                width="70px"
                height="50px"
                src={`${category.image[0]}`}
                className="rounded"
              />
              <div className="space-y-0.5 pl-1">
                <p className="text-[13px] text-gray-700 dark:text-gray-200 tracking-wide">
                  {/* Logistics &amp; Dispatch */}
                  {category.id}
                </p>
                <div className="space-x-2 flex text-[11px] dark:text-gray-400 ">
                  <p className=" pr-1 text-gray-500">
                    <span>{category.count} </span> Bookings
                  </p>
                  <p>&middot;</p>
                  <p className="text-purple-600">
                    {" "}
                    {`₦ ${millify(category.totalComms)} commission`}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-emerald-600 font-bold text-[13px] pr-3">
                {`₦ ${millify(category.total)}`}
              </p>
            </div>
          </article>
        </li>
      );
    });
  }

  return (
    <article className="bg-white dark:bg-gray-800 dark:border-gray-700  pr-1 border-gray-100 rounded-xl w-full">
      <article className="px-3 flex justify-between items-center pt-4 border-b dark:border-gray-600 pb-2 ">
        <h2 className="   font-semibold dark:text-purple-600 text-purple-800 text-[14px]  tracking-wide">
          Top Categories
        </h2>
        <Formik initialValues={{ categories: selected }}>
          {() => {
            return (
              <Form>
                <div className="relative ">
                  <Select
                    name="tasker"
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

      <article className="">
        <section className=" ">
          <div className=" rounded-lg px-4   bg-white dark:bg-transparent  h-full ">
            <article className=" text-[13px] font-medium  ">
              <ul className=" pt-1 pb-2  ">
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
    </article>
    // <div></div>
  );
};

export default TopCategories;
// <li
//   key={idx}
//   className="border-b py-2 dark:border-gray-700"
// >
//   <article className="flex justify-between items-center">
//     <div className="flex space-x-2 items-center">
//       <img
//         width="50px"
//         height="30px"
//         src={`${category.image[0]}`}
//         className="rounded"
//       />
//       <div className="space-y-1">
//         <p className="text-[13px] text-gray-700 dark:text-gray-200 tracking-wide">
//           {/* Logistics &amp; Dispatch */}
//           {category.id}
//         </p>
//         <div className="space-x-2 flex text-[11px] dark:text-gray-400">
//           <p className="border-r pr-1">
//             <span>{category.total} </span> bookings
//           </p>
//           {/* <p>2340 Completed</p> */}
//         </div>
//       </div>
//     </div>

//     <div>
//       <p className="text-purple-600 font-bold text-[13px]">
//         {category.totalComms}
//       </p>
//     </div>
//   </article>
// </li>
