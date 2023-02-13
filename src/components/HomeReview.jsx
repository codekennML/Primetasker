import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HomeReview = () => {
  return (
    <article class="mt-12 border-2 p-8  justify-center items-center rounded-lg">
      <div class="flex flex-row items-center justify-between space-x-6 mb-3 ">
        <div class="flex flex-row items-center ">
          <p class="flex space-x-2 items-center  rounded-full text-lg ">
            <FontAwesomeIcon icon={faStar} class="w-7 h-7 text-orange-400 " />
            <span class="font-semibold text-xl "> 4.65 </span>
          </p>
          <h2 class="text-xl font-semibold text-gray-800 pl-2">
            &#x2022; 65 Reviews
          </h2>
        </div>

        <div class=" pr-12 ">
          <button class="hover:bg-gray-600 hover:text-white border border-gray-500 px-6 text-gray-600 py-2 rounded-lg font-semibold">
            See all reviews
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-x-6 gap-y-4 border-y mt-4 py-6">
        <p class="flex justify-between">
          <span class=" text-sm  "> Amenities </span>
          <span class="text-text-sm sm relative before:w-[80px] before:absolute before:h-1 before:bg-gray-600 before:rotate-180 before:-left-16 before:rounded inline-flex items-center pl-6 font-bold">
            3.0
          </span>
        </p>
        <p class="flex justify-between">
          <span class=" text-sm  "> Communication </span>
          <span class="text-sm relative before:w-[80px] before:absolute before:h-1 before:bg-gray-600 before:rotate-180 before:-left-16 before:rounded inline-flex items-center pl-6 font-bold">
            4.0
          </span>
        </p>
        <p class="flex justify-between">
          <span class=" text-sm  "> Location </span>
          <span class="text-sm relative before:w-[80px] before:absolute before:h-1 before:bg-gray-600 before:rotate-180 before:-left-16 before:rounded inline-flex items-center pl-6 font-bold">
            3.5
          </span>
        </p>
        <p class="flex justify-between">
          <span class=" text-sm  "> Value </span>
          <span class="text-sm relative before:w-[80px] before:absolute before:h-1 before:bg-gray-600 before:rotate-180 before:-left-16 before:rounded inline-flex items-center pl-6 font-bold">
            4.5
          </span>
        </p>
      </div>

      <section class="grid grid-cols-2 gap-x-4 gap-y-2">
        <div class="border-t shadow p-4 mt-8 rounded-lg">
          <div class="mt-4 flex flex-row items-center">
            <p class="w-12 h-12 bg-gray-100 rounded-full">
              <img
                src="https://media.istockphoto.com/photos/happy-millennial-afro-american-business-woman-posing-isolated-on-picture-id1386479313?b=1&k=20&m=1386479313&s=170667a&w=0&h=axEYGqmMKgDx8nk47CRAuGc27P1mnEu3zDJCdK7WlsE="
                alt=""
                class="rounded-full w-full h-full object-center"
              />
            </p>
            <p class="inline-flex flex-col items-center pl-3">
              <span class="text-sm font-semibold"> Nkoyo Jadesola </span>
              <span class="text-sm">Mar 20, 2020</span>
            </p>
          </div>
          <p class="mt-4 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            dolore quia fugit, nulla iure est incidunt deleniti ab nobis
            repellendus voluptas quasi omnis perspiciatis delectus temporibus
            corrupti labore consectetur animi.
          </p>
        </div>

        <div class="border-t shadow  p-4 mt-8 rounded-lg">
          <div class="mt-4 flex flex-row items-center">
            <p class="w-12 h-12 bg-gray-100 rounded-full">
              <img
                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU="
                alt=""
                class="rounded-full w-full h-full object-center"
              />
            </p>
            <p class="inline-flex flex-col items-center pl-3">
              <span class="text-sm font-semibold"> Mike Harvey </span>
              <span class="text-sm">Mar 20, 2020</span>
            </p>
          </div>
          <p class="mt-4 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            dolore quia fugit, nulla iure est incidunt deleniti ab nobis
            repellendus voluptas quasi omnis perspiciatis delectus temporibus
            corrupti labore consectetur animi.
          </p>
        </div>
        <div class="border-t shadow  p-4 mt-8 rounded-lg">
          <div class="mt-4 flex flex-row items-center">
            <p class="w-12 h-12 bg-gray-100 rounded-full">
              <img
                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU="
                alt=""
                class="rounded-full w-full h-full object-center"
              />
            </p>
            <p class="inline-flex flex-col items-center pl-3">
              <span class="text-sm font-semibold"> Mike Harvey </span>
              <span class="text-sm">Mar 20, 2020</span>
            </p>
          </div>
          <p class="mt-4 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            dolore quia fugit, nulla iure est incidunt deleniti ab nobis
            repellendus voluptas quasi omnis perspiciatis delectus temporibus
            corrupti labore consectetur animi.
          </p>
        </div>

        <div class="border-t shadow p-6 mt-8 rounded-lg">
          <div class="mt-4 flex flex-row items-center">
            <p class="w-12 h-12 bg-gray-100 rounded-full">
              <img
                src="https://media.istockphoto.com/photos/happy-millennial-afro-american-business-woman-posing-isolated-on-picture-id1386479313?b=1&k=20&m=1386479313&s=170667a&w=0&h=axEYGqmMKgDx8nk47CRAuGc27P1mnEu3zDJCdK7WlsE="
                alt=""
                class="rounded-full w-full h-full object-center"
              />
            </p>
            <p class="inline-flex flex-col items-center pl-3">
              <span class="text-sm font-semibold"> Nkoyo Jadesola </span>
              <span class="text-sm">Mar 20, 2020</span>
            </p>
          </div>
          <p class="mt-4 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            dolore quia fugit, nulla iure est incidunt deleniti ab nobis
            repellendus voluptas quasi omnis perspiciatis delectus temporibus
            corrupti labore consectetur animi.
          </p>
        </div>
      </section>
    </article>
  );
};

export default HomeReview;
