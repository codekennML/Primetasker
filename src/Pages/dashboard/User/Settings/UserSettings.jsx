import React from "react";
import Toggle from "../../../../utils/Toggle";

const Users = () => {
  return (
    <section class="px-7 max-w-screen-lg">
      <article class="border-b py-3 sticky top-0 z-10 bg-white ">
        <h2 class="text-xl font-medium text-gray-600 font-sans">
          Users Management
        </h2>
        {/* <p class='text-sm  text-gray-600 pt-3 pb-2'>Here you can edit assets  about yourself</p> */}
      </article>
      <article class="py-5 space-y-2">
        <h2 class="text-sm font-medium">Permissions & Roles</h2>
        <span class="text-[11px]">
          Owners have view and edit access to user management by default which
          cannot be changed
        </span>
        <p class="text-xs pr-24 max-w-screen-sm">
          Every member gets basic permissions and functionality by default. You
          can customize settings for all members or make local adjustments for
          individual role types
        </p>
      </article>
      <article class="flex justify-between items-center my-2">
        <div class="text-sm font-medium">
          <h3>Roles</h3>
        </div>
        <div class="text-sm font-medium">
          <h3>Permission</h3>
        </div>
        <div>
          <button class="border py-2 px-5  rounded-lg text-sm  bg-purple-700 text-white font-medium">
            Add role
          </button>
        </div>
      </article>
      <article class="flex flex-row justify-between py-8 gap-x-3 border-y border-gray-100">
        <div class="items-start text-sm font-medium text-gray-600">
          <h2>Administrator</h2>
        </div>
        <div class="self-center flex-1 flex-wrap px-20">
          <ul class="flex flex-wrap gap-x-6 ">
            <Toggle toggleDesc={`Add view edit and delete users`} />

            <Toggle
              toggleDesc={`Create view edit and delete bookings`}
              checked={true}
            />
            <Toggle
              toggleDesc={`Add view edit and delete employee`}
              checked={true}
            />

            <Toggle
              toggleDesc={`Create view, edit and delete tasks`}
              checked={true}
            />

            <Toggle toggleDesc={`Create, view , edit transactions`} />

            <Toggle toggleDesc={`Create, view and edit user `} checked={true} />

            <Toggle toggleDesc={`Create, view and edit user `} />

            <Toggle toggleDesc={`Create, view and edit user `} checked={true} />
          </ul>
        </div>
      </article>
      <article class="flex flex-row justify-between py-8 gap-x-3 border-y border-gray-100">
        <div class="items-start text-sm font-medium text-gray-600">
          <h2>Manager</h2>
        </div>
        <div class="self-center flex-1 flex-wrap px-20">
          <ul class="flex flex-wrap gap-x-6 ">
            <Toggle toggleDesc={`Add view edit and delete users`} />

            <Toggle
              toggleDesc={`Create view edit and delete bookings`}
              checked={true}
            />
            <Toggle
              toggleDesc={`Add view edit and delete employee`}
              checked={true}
            />

            <Toggle
              toggleDesc={`Create view, edit and delete tasks`}
              checked={true}
            />

            <Toggle toggleDesc={`Create, view , edit transactions`} />

            <Toggle toggleDesc={`Create, view and edit user `} checked={true} />

            <Toggle toggleDesc={`Create, view and edit user `} />

            <Toggle toggleDesc={`Create, view and edit user `} checked={true} />
          </ul>
        </div>
      </article>
      <article class="flex flex-row justify-between py-8 gap-x-3 border-y border-gray-100">
        <div class="items-start text-sm font-medium text-gray-600">
          <h2>Editor</h2>
        </div>
        <div class="self-center flex-1 flex-wrap px-20">
          <ul class="flex flex-wrap gap-x-6 ">
            <Toggle toggleDesc={`Add view edit and delete users`} />

            <Toggle
              toggleDesc={`Create view edit and delete bookings`}
              checked={true}
            />
            <Toggle
              toggleDesc={`Add view edit and delete employee`}
              checked={true}
            />

            <Toggle
              toggleDesc={`Create view, edit and delete tasks`}
              checked={true}
            />

            <Toggle toggleDesc={`Create, view , edit transactions`} />

            <Toggle toggleDesc={`Create, view and edit user `} checked={true} />

            <Toggle toggleDesc={`Create, view and edit user `} />

            <Toggle toggleDesc={`Create, view and edit user `} checked={true} />
          </ul>
        </div>
      </article>
      <article class="flex flex-row justify-between py-8 gap-x-3 border-y border-gray-100">
        <div class="items-start text-sm font-medium text-gray-600">
          <h2>Tasker</h2>
        </div>
        <div class="self-center flex-1 flex-wrap px-20">
          <ul class="flex flex-wrap gap-x-6 ">
            <Toggle toggleDesc={`Add view edit and delete users`} />

            <Toggle
              toggleDesc={`Create view edit and delete bookings`}
              checked={true}
            />
            <Toggle
              toggleDesc={`Add view edit and delete employee`}
              checked={true}
            />

            <Toggle
              toggleDesc={`Create view, edit and delete tasks`}
              checked={true}
            />

            <Toggle toggleDesc={`Create, view , edit transactions`} />

            <Toggle toggleDesc={`Create, view and edit user `} checked={true} />

            <Toggle toggleDesc={`Create, view and edit user `} />

            <Toggle toggleDesc={`Create, view and edit user `} checked={true} />
          </ul>
        </div>
      </article>
      <article class="flex flex-row justify-between py-8 gap-x-3 border-y border-gray-100">
        <div class="items-start text-sm font-medium text-gray-600">
          <h2>Customer</h2>
        </div>
        <div class="self-center flex-1 flex-wrap px-20">
          <ul class="flex flex-wrap gap-x-6 ">
            <Toggle toggleDesc={`Add view edit and delete users`} />

            <Toggle
              toggleDesc={`Create view edit and delete bookings`}
              checked={true}
            />
            <Toggle
              toggleDesc={`Add view edit and delete employee`}
              checked={true}
            />

            <Toggle
              toggleDesc={`Create view, edit and delete tasks`}
              checked={true}
            />

            <Toggle toggleDesc={`Create, view , edit transactions`} />

            <Toggle toggleDesc={`Create, view and edit user `} checked={true} />

            <Toggle toggleDesc={`Create, view and edit user `} />

            <Toggle toggleDesc={`Create, view and edit user `} checked={true} />
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Users;
