
import { Link } from 'react-router-dom';
import { useGetPropertiesQuery } from "../features/properties/PropertySlice";


const PropertiesExcerpt = ({ propertyId }) => {

    const { property } = useGetPropertiesQuery("propertiesList", {
        selectFromResult: ({ data }) => ({
            property: data?.entities[propertyId]
        }),
    })
  


    return (
        <article>
            <h2>{property.title}</h2>
            <p className="excerpt">{property.body.substring(0, 75)}...</p>
            <p className="propertiesCredit">
                <Link to={`properties/${property.id}`}>View Property</Link>
             
            </p>
          
        </article>
    )
}

export default PropertiesExcerpt