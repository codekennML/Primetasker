import { FaTimes } from "react-icons/fa";

const ModalOverlay = ({ isOpen, isClosed, content }) => {
  return (
    <section onClick={isClosed} class=" w-[600px]  ">
      <article
        onClick={(e) => e.stopPropclassNameon()}
        class="w-full  h-full absolute overflow-y-autclassNamerflow-x-hidden z-50 justify-center items-center  md:inset-0 h-modal md:h-full"
      >
        {content}
      </article>
    </section>
  );
};

export default ModalOverlay;
