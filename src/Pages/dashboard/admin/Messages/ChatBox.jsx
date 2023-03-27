import MultipleFileUpload from "../../../../utils/CustomFieldComp/MultipleFileUpload";
import { Formik, Form } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { MdCropRotate, MdRotateLeft, MdRotateRight } from "react-icons/md";
import {
  AiFillCloseSquare,
  AiFillFilePdf,
  AiOutlineSave,
} from "react-icons/ai";
import { useSendMessageMutation } from "../../../../features/chats/slices/chatApiSlice";
import { useState } from "react";
import {
  FaPaperclip,
  FaRegPaperPlane,
  FaRegImages,
  FaMicrophone,
} from "react-icons/fa";
import Example from "./Cropper";

const ChatBox = ({ showFileBox, setShowFileBox, selectedChat }) => {
  const [showCropper, setShowCropper] = useState();
  let message = {
    messageText: "",
    files: [],
    chatId: selectedChat,
  };

  const [newMessage, setNewMessage] = useState(message);

  const typingHandler = (event) => {
    const { name, value } = event.target;

    setNewMessage((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [sendMessage, { error, isError, isSuccess: success }] =
    useSendMessageMutation();

  const sendNewMessage = async (event) => {
    if (
      event.key === "Enter" &&
      (newMessage.messageText !== "" || newMessage.files.length > 0)
    ) {
      event.preventDefault();
      const data = await sendMessage(newMessage);
      if (success) {
        console.log(data);
      } else if (isError) {
        console.log(error);
      }
      setNewMessage(message);
      setSelectedEmoji("");
    }
  };
  return (
    <Formik initialValues={{}}>
      {() => {
        return (
          <Form>
            <div className=" w-full  absolute bottom-0 right-0 z-50">
              <AnimatePresence>
                {showFileBox ? (
                  <motion.div
                    key={`fileBox show`}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{
                      opacity: 100,
                      y: 0,
                      transition: {
                        duration: 0.4,
                      },
                    }}
                    exit={{
                      // y: 80,
                      opacity: 0,
                      transition: {
                        delay: 0.2,
                        duration: 0.2,
                      },
                    }}
                    className={`
                       bottom-12 left-0 h-96 bg-gray-100  flex flex-col items-center text-justify px-20`}
                  >
                    <div className="absolute left-5 top-64">
                      <ul className="flex flex-col space-y-5">
                        <li className="bg-gradient-to-b from-pink-500  to-blue-600 p-2 rounded-full text-white ">
                          <FaRegImages />
                        </li>
                        <li className=" p-2 rounded-full text-white bg-gradient-to-t from-blue-500  to-purple-600">
                          <AiFillFilePdf />
                        </li>

                        <li className="p-2 rounded-full text-white bg-gradient-to-b from-orange-500  to-purple-600">
                          <FaMicrophone />
                        </li>
                      </ul>
                      {/* <Example /> */}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 100 }}
                      transition={{ duration: 1 }}
                      className=""
                    >
                      <button onClick={() => setShowFileBox(false)}>
                        <AiFillCloseSquare className="cursor-pointer text-[35px] text-purple-800  absolute left-5 top-6 font-bold" />
                      </button>
                    </motion.div>

                    <div className=" mx-auto  ">
                      {!showCropper && (
                        <section>
                          <div>
                            <Example />
                          </div>

                          <div className="flex flex-row  gap-2 mt-[80px]">
                            <img
                              src="https://plus.unsplash.com/premium_photo-1668383778561-4d40092accb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                              height="100"
                              width="70"
                              className="object-cover  object-center rounded h-[60px] border-purple-700 border-2 p-0.5"
                            />
                          </div>
                        </section>
                      )}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
              <div
                className={`${
                  showFileBox
                    ? " -translate-y-[200%] bg-transparent w-full py-0 px-24  "
                    : "bg-white/80 py-3"
                } px-6   transition:translate duration-700 `}
              >
                <form className="flex items-center" onKeyDown={sendNewMessage}>
                  <div className="relative w-full">
                    <div className="flex flex-row justify-between">
                      <button
                        type="button"
                        onClick={() => setShowFileBox((prev) => !prev)}
                        className=" text-gray-600 "
                      >
                        {!showFileBox ? (
                          <FaPaperclip className="text-purple-800 text-[20px]" />
                        ) : null}
                      </button>
                      {/* <button type="button" onClick={handleShowEmojis}>
                      <BsEmojiSmile className="text-gray-400 font-medium text-[24px]" />
                    </button> */}

                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center  bg-purple-800 text-white px-4 rounded"
                      >
                        <FaRegPaperPlane
                          className="text-white font-medium
                      text-[15px] transform rotate-[30deg]"
                        />
                      </button>
                      <textarea
                        onChange={(e) => typingHandler(e)}
                        // type="text"
                        name="messageText"
                        value={newMessage.messageText}
                        className=" flex-1 w-3/4 bg-white border border-gray-200 text-gray-900 text-xs rounded-lg outline-none focus:ring-gray-500 focus:outline-none block 
                     h-10 pl-3 py-2  pr-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-blue-500 ml-2 whitespace-wrap break-words  resize-none scrollbar-thin "
                        placeholder="Type a message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ChatBox;
