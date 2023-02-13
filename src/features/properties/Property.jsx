import { useNavigate, useParams } from "react-router-dom";

const Property = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // {console.log(id);}
  const handleEdit = () => navigate(`/dashboard/properties/edit/${id}`);

  return (
    <div>
      <p>Properties</p>
      <button onClick={handleEdit} class="bg-blue-400 text-white px-3 py-1">
        Edit
      </button>
    </div>
  );
};

export default Property;
