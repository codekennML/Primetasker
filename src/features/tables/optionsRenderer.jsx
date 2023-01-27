const OptionsRenderer = ({ value }) => {
  let content;
  switch (true) {
    case value === "Accepted":
      content = (
        <span className="w-full bg-blue-100 text-blue-600 px-3 py-1.5 text-xs rounded-full ">
          {value}
        </span>
      );
      break;
    case value === "Processing":
      content = (
        <span className=" w-full bg-yellow-100 text-yellow-600 px-3 py-1.5  text-xs rounded-full ">
          {value}
        </span>
      );
      break;
    case value === "Dispute":
      content = (
        <span className=" w-full bg-gray-500 text-gray-100 px-3 py-1.5  text-xs rounded-full ">
          {value}
        </span>
      );
      break;
    case value === "Cancelled":
      content = (
        <span className="w-full bg-rose-100 text-rose-600 px-3 py-1.5  text-xs rounded-full ">
          {value}
        </span>
      );
      break;
    case value === "Completed":
      content = (
        <span className=" w-full bg-green-100 text-green-600 px-3 py-1.5  text-xs rounded-full ">
          {value}
        </span>
      );
      break;
    default:
      content = "";
  }

  return content;
};

export default OptionsRenderer;
