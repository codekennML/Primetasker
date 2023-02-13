import React from "react";
import {
  faBed,
  faCreditCard,
  faCreditCardAlt,
  faIdCard,
  faPaw,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../utils/Icon";

const HouseRules = () => {
  return (
    <section>
      <h2 class="mb-2 font-bold text-xl  mt-6">House Rules</h2>
      <p class="text-[11px] my-2 ">
        Lagos Continental Hotel takes special requests - add in the next step!
      </p>

      <article class="bg-blue-50 w-full space-y-8 py-12 px-2 mt-6 pr-24">
        <div class="flex flex-row items-center text-[12px]">
          <div class="flex flex-row  w-[205px] box-border items-center">
            <Icon icon={faSignIn} class={`w-5 h-5 pr-3 text-gray-500`} />
            Check - In
          </div>

          <div class="w-80 h-3 bg-gray-400 rounded-full">
            <p class="w-[50%] h-full bg-green-700 rounded-l-full "></p>
          </div>
        </div>
        <div class="flex flex-row items-center text-[12px]">
          <div class="flex flex-row  w-[205px] box-border items-center">
            <Icon icon={faSignIn} class={`w-5 h-5 pr-3 text-gray-500`} />
            Check - Out
          </div>

          <div class="w-80 h-3 bg-gray-400 rounded-full inline-flex justify-end">
            <p class="w-[40%] h-full bg-green-700 rounded-r-full "></p>
          </div>
        </div>
        <div class="flex flex-row items-start text-[12px] box-border">
          <p class="flex flex-row  w-[220px] box-border items-center ">
            <Icon icon={faSignIn} class={`w-5 h-5 pr-3 text-gray-500`} />
            Cancellation/prepayment
          </p>

          <p class="pl-7">
            Cancellation and prepayment policies vary according to accommodation
            type. Please enter the dates of your stay and check the conditions
            of your required room.
          </p>
        </div>
        <div class="flex flex-row items-start text-[12px]">
          <div class="flex flex-row  w-[250px] box-border items-center">
            <Icon icon={faSignIn} class={`w-5 h-5 pr-3 text-gray-500`} />
            Children and beds
          </div>

          <div>
            <p class="font-medium text-[15px] mt-2 mb-2"> Child policies </p>
            Children of any age are welcome. To see correct prices and occupancy
            information, please add the number of children in your group and
            their ages to your search.
            <p class="font-medium text-sm mt-4 ">
              Cot and extra bed policies
            </p>{" "}
            <br />
            <p class="border border-gray-300 py-2 px-3 w-[500px] ">
              {" "}
              0 - 2 years
            </p>
            <p class="border border-gray-300 py-2 px-3 w-[500px] flex flex-row items-center ">
              <span class="flex flex-row w-[300px] items-center">
                <Icon icon={faBed} class={`pr-2`} />
                Cot upon request
              </span>
              <span>Free</span>
            </p>
            <div class="mt-4">
              <p class="border border-gray-300 py-2 px-3 w-[500px]  ">
                {" "}
                3+ years
              </p>
            </div>
            <p class="border border-gray-300 py-2 px-3 w-[500px] flex flex-row mb-3 items-center ">
              <span class="flex flex-row w-[300px] items-center">
                <Icon icon={faBed} class={`pr-2`} />
                Extra bed upon request
              </span>
              <span>US$15 per person, per night</span>
            </p>
            <div>
              <p class="my-1">
                {" "}
                Prices for cots and extra beds are not included in the total
                price, and will have to be paid for separately during your stay.
              </p>
              <p>
                {" "}
                The number of extra beds and cots allowed is dependent on the
                option you choose. Please check your selected option for more
                information.
              </p>
              <p class="my-1">
                {" "}
                All cots and extra beds are subject to availability.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center text-[12px]">
          <p class="flex flex-row space-x-2 w-[205px] box-border items-center">
            <Icon icon={faSignIn} class={`w-5 h-5 pr-3 text-gray-500`} />
            Age restriction
          </p>

          <p>The minimum age for check-in is 18</p>
        </div>
        <div class="flex flex-row items-center text-[12px]">
          <p class="flex flex-row space-x-2 w-[205px] box-border items-center">
            <Icon icon={faPaw} class={`w-5 h-5 pr-3 text-gray-500`} />
            Pets
          </p>

          <p class="pl-0">Pets are not allowed.</p>
        </div>
        <div class="flex flex-row text-[12px] items-start">
          <p class="flex flex-row   box-border items-center w-[205px]">
            <Icon icon={faCreditCard} class={`w-5 h-5 pr-3 text-gray-500`} />
            Cards accepted at this hotel
          </p>

          <div>
            <p class="flex flex-row space-x-3">
              <Icon icon={faCreditCard} class={`w-6 h-6 text-yellow-400`} />
              <Icon icon={faCreditCard} class={`w-6 h-6 text-red-400`} />
              <Icon icon={faCreditCardAlt} class={`w-6 h-6 text-green-400`} />
            </p>
            <p>
              Lagos Continental Hotel accepts these cards and reserves the right
              to temporarily hold an amount prior to arrival.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HouseRules;
