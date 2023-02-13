const Cities = () => {
  return (
    <section class="px-7 max-w-screen-lg">
      <article class="border-b py-3 sticky top-0 z-10 bg-white ">
        <h2 class="text-xl font-medium text-gray-600 font-sans">
          Cities Management
        </h2>
        {/* <p class='text-sm  text-gray-600 pt-3 pb-2'>Here you can edit assets information about yourself</p> */}
      </article>
      <article class="mt-4 max-w-screen-md space-y-3 text-xs">
        <h3 class="text-sm font-medium text-gray-600">
          Create and Manage all Cities
        </h3>
        <p class="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          architecto quis veniam velit{" "}
        </p>
      </article>
      <article class="mt-4">{/* <DataTable pagination={10} /> */}</article>
    </section>
  );
};

export default Cities;
