import { format } from "date-fns";
import { useFormikContext } from "formik";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const ReviewStep = () => {
  const formatDate = (date) => {
    const fromDate = `${format(new Date(date[0].startDate), "eee dd LLL")}`;
    const beforeDate = `${format(new Date(date[0].endDate), "eee dd LLL")}`;
    const formattedDate = ` ${fromDate} - ${beforeDate}`;

    return formattedDate;
  };

  const { values } = useFormikContext();
  console.log(values);
  return (
    <section className="my-6 bg-gradient-to-tr from-purple-100 via-gray-50 to-orange-50">
      <article className=" mt-4">
        <h2 className="font-bold text-[30px]  mt-4 py-8 text-center">
          Review task Information
        </h2>

        <div className="w-full px-4 pt-16">
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Task title</span>
                    <AiOutlineArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {/* If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked. */}
                    {values.title}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-50 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Task Date</span>
                    <BsChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <AiOutlineArrowUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <AiOutlineArrowUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <AiOutlineArrowUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <AiOutlineArrowUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <AiOutlineArrowUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Do you offer technical support?</span>
                    <AiOutlineArrowUp
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        {/* <div className="space-y-4 font-medium">
          <p className="border-l-4 border-gray-600 pl-3 bg-white py-2  ">
            <span className="font-bold">Title :</span> {values.title}
          </p>
          <p className="border-l-4 border-purple-600 pl-3 bg-white py-2  ">
            <span className="font-bold">Date :</span>{" "}
            {`${values.taskTime} - ${formatDate(values.date)}`}
          </p>
          <p className="border-l-4 border-purple-600 pl-3 bg-white py-2   ">
            <span className="font-bold">Category :</span> {values.category}
          </p>
          <p className="border-l-4 border-purple-600 pl-3 bg-white py-2   ">
            <span className="font-bold">Location :</span>{" "}
            {`${
              values.taskType === "physical"
                ? `On-Site -  ${values.location}`
                : `Remote`
            }`}
          </p>
          <p className="border-l-4 border-purple-600 pl-3 bg-white py-2 overflow-y-scroll pr-3  ">
            <span className="font-bold">Description :</span> {values.details}
          </p>
          <p className="border-l-4 border-purple-600 pl-3 bg-white py-2  ">
            Images
          </p>
          <div className="flex flex-row space-x-2 items-center">
            {values.files.map((file, idx) => {
              return (
                <li key={idx} className="list-none">
                  <img src={file.url} className="rounded-lg w-24 h-24" />
                </li>
              );
            })}
          </div>
        </div> */}
      </article>
    </section>
  );
};

export default ReviewStep;
