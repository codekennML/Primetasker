import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const QuestionCard = () => {
  return (
    <article class="border border-gray-200 px-4   flex flex-col ">
      <div class="flex flex-row space-x-6 mt-3">
        <FontAwesomeIcon icon={faCircleUser} class="w-7 h-7" />

        <p class="font-medium text-[13px]">
          What is best rate for 9 nites. A one bedroom suite ? Im coming in from
          USA in January Looking at your hotel
        </p>
      </div>

      <div class="flex flex-row space-x-6 mt- pt-3 pb-20">
        <FontAwesomeIcon icon={faComments} class="w-7 h-7" />
        <p class=" text-xs">
          Our best rate would be 186 USD for 9 nights. Apologies for the delayed
          response.
        </p>
      </div>

      <div class="items-end text-[11px] py-2">
        <p>Answered on 8 November 2019</p>
      </div>
    </article>
  );
};

export default QuestionCard;
