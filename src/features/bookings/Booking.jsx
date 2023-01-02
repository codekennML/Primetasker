import { useNavigate, useParams } from "react-router-dom"

const Bookings = () => {
    const { id  } =  useParams()
    const navigate =  useNavigate()
    // {console.log(id);}
    const handleEdit = () => navigate(`/dashboard/bookings/edit/${id}`)

  return (

    <div>
        {/* <p>Bookings</p> */}
        {/* <button onClick={handleEdit} className="bg-blue-400 text-white px-3 py-1">Edit</button> */}
        
    </div>
  )
}

export default Bookings