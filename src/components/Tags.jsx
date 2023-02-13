import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tags = ({ icon, name }) => {
  return (
    <button class="border border-gray-300 rounded-full py-1 px-6 space-x-2">
      <FontAwesomeIcon icon={icon} class="w-4 h-4" />
      <span class="text-xs font-medium"> {name}</span>
    </button>
  );
};

export default Tags;
