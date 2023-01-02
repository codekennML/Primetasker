import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { selectBookingById } from "./BookingSlice";
import {
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} from "./BookingSlice";
import { useGetUsersQuery } from "../users/slices/UserApiSlice";
import useAuth from "../../hooks/useAuth";

import { useSelector } from "react-redux";
// import {isAdmin, isM}

const ModifyBooking = () => {
  const notify = () => toast("Wow so easy !");
  const { id: bookingId } = useParams(); //Destructure Booking id from url
  {
    console.log(bookingId);
  }
  const navigate = useNavigate();
  // const {isManager, isAdmin, userId } =  useAuth()

  // Obtain Booking from Bookings List
  // const { Booking } = useGetBookingsQuery()
  const booking = useSelector((state) =>
    selectBookingById(state, Number(bookingId))
  );

  // const  userId =  1
  // Obtain individual User from usersList
  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[booking.id],
    }),
  });
  {
    console.log(user);
  }
  //call update Booking query from Bookingslice
  const [updateBooking, { isLoading, isError, isSuccess, error }] =
    useUpdateBookingMutation();

  //Call DeleteBookingMutation from BookingSlice
  const [
    deleteBooking,
    {
      isLoading: isDelPending,
      isError: isDelError,
      isSuccess: isDelSuccess,
      error: delError,
    },
  ] = useDeleteBookingMutation();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setBody(e.target.value);
  // const onCompletedChanged = e => setCompleted(prev => !prev)
  // const onUserIdChanged = e => setUserId(e.target.value)

  //Save current Booking details to state
  const [title, setTitle] = useState(booking.email);
  {
    console.log(title);
  }
  const [body, setBody] = useState(booking.username);
  // {console.log(body);}
  // const [completed, setCompleted] = useState(note.completed)
  const [userIdn, setUserIdn] = useState(user.id);

  // Check if either of the delete or update event is successful and empty form , redirect to main Booking page
  useEffect(() => {
    if (isSuccess || isDelSuccess) {
      setTitle("");
      setBody("");
      setUserIdn("");
      // TODO :: insert toastify notification

      setTimeout(() => {
        navigate("/dashboard/properties");
      }, 3000);
    }
  }, [isSuccess, isDelSuccess, navigate]);

  //Check if the form inputs have values in them and that the mutation states arent loading
  const canSave = [title, body, userIdn].every(Boolean) && !isLoading;

  //Dispatch the updateBookingMutation if updateButton is clicked
  const onUpdateBookingClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      // {console.log(body);}
      await updateBooking({ id: booking.id, user: userIdn, title, body });
    }
  };
  //Dispatch the  deleteBookingMutation if delete  is clicked
  const onDeleteBookingClicked = async () => {
    await deleteBooking({ id: booking.id });
  };

  let deleteButton = null;
  let editButton = null;

  //Ensure that only the facility manager  and the admin can see the edit&Delete Button
  if (user) {
    //(isManager ) //|| //(isAdmin))
    deleteButton = (
      <button
        className="bg-red-400 text-white px-2 py-2"
        // title="Update"
        onClick={onDeleteBookingClicked}
      >
        Delete Booking
      </button>
    );

    editButton = (
      <button
        disabled={!canSave}
        className="bg-blue-300 text-white px-2 py-2"
        // title="UpdatePost"
        onClick={onUpdateBookingClicked}
      >
        EditBooking
      </button>
    );
  }

  let content;

  if (booking) {
    content = (
      <form>
        <input
          type="text"
          value={title}
          className="border bg-red-300 m-4"
          onChange={onTitleChanged}
        />
        <br />
        <input type="text" value={body} onChange={onTextChanged} />
        <br />
        {/* <input type = 'text' disabled  value={userId} onChange = {(e) => setUserId(e.target.value)}/> */}
        {editButton}
      </form>
    );
  } else {
    content = <p>OOps! Booking does not exist</p>;
  }

  return (
    <div>
      {content}
      {deleteButton}
    </div>
  );
};

export default ModifyBooking;
