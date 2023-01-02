import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetPropertiesQuery } from "./PropertySlice";
import { useGetUsersQuery } from "../users/slices/UserApiSlice";
import {
  useUpdatePropertyMutation,
  useDeletePropertyMutation,
} from "./PropertySlice";
import useAuth from "../../hooks/useAuth";
// import {isAdmin, isM}

const ModifyProperty = () => {
  const { id } = useParams(); //Destructure property id from url
  const navigate = useNavigate();
  // const {isManager, isAdmin, userId } =  useAuth()

  // Obtain property from propertiesList
  const { property } = useGetPropertiesQuery("propertiesList", {
    selectFromResult: ({ data }) => ({
      property: data?.entities[id],
    }),
  });
  const userId = 1;
  // Obtain individual User from usersList
  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[property.userId],
    }),
  });

  //call update property query from propertyslice
  const [updateProperty, { isLoading, isError, isSuccess, error }] =
    useUpdatePropertyMutation();

  //Call DeletePropertyMutation from PropertySlice
  const [
    deleteProperty,
    {
      isLoading: isDelPending,
      isError: isDelError,
      isSuccess: isDelSuccess,
      error: delError,
    },
  ] = useDeletePropertyMutation();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setBody(e.target.value);
  // const onCompletedChanged = e => setCompleted(prev => !prev)
  // const onUserIdChanged = e => setUserId(e.target.value)

  //Save current property details to state
  const [title, setTitle] = useState(property.title);
  {
    console.log(title);
  }
  const [body, setBody] = useState(property.body);
  // {console.log(body);}
  // const [completed, setCompleted] = useState(note.completed)
  const [userIdn, setUserIdn] = useState(user.id);

  // Check if either of the delete or update event is successful and empty form , redirect to main property page
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

  //Dispatch the updatePropertyMutation if updateButton is clicked
  const onUpdatePropertyClicked = async (e) => {
    e.preventDefault();
    if (canSave) {
      // {console.log(body);}
      await updateProperty({ id: property.id, user: userIdn, title, body });
    }
  };
  //Dispatch the  deletePropertyMutation if delete  is clicked
  const onDeletePropertyClicked = async () => {
    await deleteProperty({ id: property.id });
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
        onClick={onDeletePropertyClicked}
      >
        Delete Property
      </button>
    );

    editButton = (
      <button
        disabled={!canSave}
        className="bg-blue-300 text-white px-2 py-2"
        // title="UpdatePost"
        onClick={onUpdatePropertyClicked}
      >
        EditProperty
      </button>
    );
  }

  let content;

  if (property) {
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
    content = <p>OOps! Property does not exist</p>;
  }

  return (
    <div>
      {content}
      {deleteButton}
    </div>
  );
};

export default ModifyProperty;
