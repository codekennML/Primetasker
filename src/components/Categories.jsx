import React from "react";

const Categories = () => {
  return (
    <div class="flex flex-col container mx-auto my-[4em] w-[80%] ">
      <h2 class="text-2xl font-bold mb-8 text-left text-gray-600 ">
        Post your first task right away. It's free !
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-8 mb-12">
        <div class="flex items-start p-4 rounded-xl shadow-lg ">
          <div class="flex items-center justify-center  h-12 w-12 rounded-full border border-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-blue-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          </div>

          <div class="ml-4">
            <h2 class="font-semibold text-gray-800">Cleaning</h2>
            <p class="mt-2 text-sm text-gray-500">View all 26 categories</p>
          </div>
        </div>
        <div class="flex items-start p-4 rounded-xl shadow-lg ">
          <div class="flex items-center justify-center bg-gray-50 h-12 w-12 rounded-full border border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="text-gray-600 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </div>

          <div class="ml-4">
            <h2 class="font-semibold text-gray-800">Electricals</h2>
            <p class="mt-2 text-sm text-gray-500">View all 40 categories </p>
          </div>
        </div>

        <div class="flex items-start p-4 rounded-xl shadow-lg ">
          <div class="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-orange-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>

          <div class="ml-4">
            <h2 class="font-semibold text-gray-800">Tech &amp; Networking</h2>
            <p class="mt-2 text-sm text-gray-500">View all 13 categories</p>
          </div>
        </div>
        <div class="flex items-start p-4 rounded-xl shadow-lg ">
          <div class="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-orange-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
              />
            </svg>
          </div>

          <div class="ml-4">
            <h2 class="font-semibold text-gray-800">Design</h2>
            <p class="mt-2 text-sm text-gray-500">View all 103 categories</p>
          </div>
        </div>
        <div class="flex items-start p-4 rounded-xl shadow-lg ">
          <div class="flex items-center justify-center bg-red-50 h-12 w-12 rounded-full border border-red-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>

          <div class="ml-4">
            <h2 class="font-semibold text-gray-800">Deliveries</h2>
            <p class="mt-2 text-sm text-gray-500">View all 43 categories</p>
          </div>
        </div>
        <div class="flex items-start p-4 rounded-xl shadow-lg ">
          <div class="flex items-center justify-center bg-red-50 h-12 w-12 rounded-full border border-red-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>

          <div class="ml-4">
            <h2 class="font-semibold text-gray-800">Errands </h2>
            <p class="mt-2 text-sm text-gray-500">View all 64 categories</p>
          </div>
        </div>
        <div class="flex items-start p-4 rounded-xl shadow-lg ">
          <div class="flex items-center justify-center bg-red-50 h-12 w-12 rounded-full border border-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="text-green-600 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          </div>

          <div class="ml-4">
            <h2 class="font-semibold text-gray-800">Business &amp; Admin</h2>
            <p class="mt-2 text-sm text-gray-500">View all 14 categories</p>
          </div>
        </div>
        <div class="flex items-start p-4 rounded-xl shadow-lg ">
          <div class="flex items-center justify-center bg-indigo-50 h-12 w-12 rounded-full border border-indigo-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-indigo-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>

          <div class="ml-4">
            <h2 class="font-semibold text-gray-800">Something else</h2>
            <p class="mt-2 text-sm text-gray-500">View all 103 categories</p>
          </div>
        </div>
      </div>
      {/* <div class="flex lg:flex-row md:flex-col mt-2 justify-center">
            <button class="bg-white border-2 border-black  hover:bg-black hover:text-white text-black inline-flex py-4 px-6  items-center  focus:outline-none">
             
       
              <span class="ml-4 flex items-start flex-col leading-none">
              
                <span class="title-font font-medium">See How it Works</span>
              </span>
            </button>
           
          </div> */}
    </div>
  );
};

export default Categories;
