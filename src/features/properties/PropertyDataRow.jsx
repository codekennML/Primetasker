import React from 'react'
import { useGetPropertiesQuery } from './propertySlice'
import { useNavigate } from 'react-router-dom'

const propertyDataRow = ( { propertyId }) => {
    const navigate =  useNavigate()
    // const property =  useSelector(state => selectpropertyById(state, propertyId))

    const { property } = useGetPropertiesQuery("propertiesList", {
      selectFromResult: ({ data }) => ({
          property: data?.entities[propertyId]
      }),
  })

   

    const openProperty =  () => {
        navigate(`/dashboard/properties/single-property/${propertyId}`)
    }
    let content 
    // {console.log(props.length);}
// if{
//   content = <p>No Properties Found</p>
// }
// else{
  content =  (
    
 
        <tr onClick = {openProperty} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {property.id}
        </th>
        <td className="py-4 px-6">
        {property.title}
        </td>
        <td className="py-4 px-6">
        {property.body}
        </td>
        
       
    </tr>
  )
// }
  return content 
}

export default propertyDataRow

