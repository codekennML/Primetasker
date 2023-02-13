import React from "react";
import { useNavigate } from "react-router-dom";

const NewBookingForm = () => {
  const { isAdmin, isManager, userId } = useAuth();

  const [addNewBooking, { isLoading, isSuccess, isError, error }] =
    useAddNewBookingMutation();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [userIdn, setUserIdn] = useState(userId);

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setText("");
      setUserId("");
      navigate("/dashboard/bookings");
    }
  }, [isSuccess, navigate]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  // const onUserIdChanged = e => setUserId(e.target.value)

  const canSave = [title, text, userId].every(Boolean) && !isLoading;

  const onSaveBookingClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      await addNewBooking({ user: userId, title, text });
    }
  };

  // const options = users.map(user => {
  //     return (
  //         <option
  //             key={user.id}
  //             value={user.id}
  //         > {user.username}</option >
  //     )
  // })

  return (
    <div>
      <form>
        <div class="mb-6">
          <label
            htmlFor="booking-name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Booking Name
          </label>
          <input
            type="text"
            id="booking-name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            htmlFor="location"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Booking Location
          </label>
          <input
            type="text"
            id="location"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          onClick={onSaveBookingClicked}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>

        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </form>
    </div>
  );
};

export default NewBookingForm;
