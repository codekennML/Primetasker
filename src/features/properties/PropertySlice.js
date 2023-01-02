import { 
    createSelector,
    createEntityAdapter,
    // createSlice,
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/apiSlice"

    const propertyAdapter =  createEntityAdapter({
            // Sort Property according by most recent based on date created

        // sortComparer : ((a,b) => b.date.localeCompare(a.date))
    })

        // unpopulated initial  state of adapter
    const initialState =  propertyAdapter.getInitialState()

// export const Propertylice = createSlice({
//     name:'Property',
//     initialState,
//     reducers: (state,action) => {

//     }
// })

    // EndPoints injected to our api for everything Property

export const propertiesApiCalls =  apiSlice.injectEndpoints({
    endpoints: builder => ({
        // Gets everything associated with the baseUrl/Property Endpoint
          getProperties : builder.query({
            query : () => '/posts' ,
        
        // Get the response from the received object and populate our state
            transformResponse: response => {
                return propertyAdapter.setAll(initialState, response)},
            
        // Use response to granulate lookup tags for caching and invalidation
            providesTag : (result, error, arg ) => 
                [
                    {type : 'Properties' , id : 'ids'},
                    ...result.ids.map( id  => ({type : 'Properties',  id}))
                ]

          }),

          getPaginatedProperties : builder.query({
            query : (pageParam = 1) => `/posts?_page=${pageParam}` ,

        // Get the response from the received object and populate our state
            transformResponse: response => {
                return propertyAdapter.setAll(initialState, response)},
            
        // Use response to granulate lookup tags for caching and invalidation
            providesTag : (result, error, arg ) => 
                [
                    {type : 'Properties' , id : 'PARTIAL-LIST'},
                    ...result.ids.map( id  => ({type : 'Properties',  id}))
                ]

          }),

        //Get all Property by an Individual user 
          getPropertyByUserId : builder.query({
            query : id  => `/property/?userId=${id}`,
            transformResponse : response => {
               return propertyAdapter.setAll(initialState, response)
            },
            providesTags : (result, error, arg ) => [
                {type : 'Properties', id : 'ids'},
                ...result.ids.map(id  => ({type : 'Properties', id}))

            ]

          }),
        
        // --------- Add a new Individual Property

          addNewProperty : builder.mutation({
            query: Property =>  ({
                url : '/property/add',
                method : 'POST',
                body : {
                    ...Property,
                    userId : Number(Property.userId) 
                },
                invalidatesTag : (result, error, arg ) => 
                [
                    {type : 'Properties',  id : 'ids'}
                ]
            })

          }),

        // ---------Update Individual Property

          updateProperty : builder.mutation({
            query: initialProperty =>  ({
                url : `/property/${initialProperty.id} `,
                method : 'PUT',
                body : {
                    ...initialProperty,
                },
                invalidatesTags : (result, error, arg ) =>
                 [
                    {type : 'Properties',  id : arg.id }
                ]
            }),

          }),

        // ---------Delete Individual Property
          deleteProperty : builder.mutation({
            query : ({ id }) =>  ({
                url : `/Property/${id}`,
                method : 'DELETE',
                body: {id },
                invalidatesTags : (result, error, arg ) => [
                    {type : 'Properties',  id : arg.id }
                ]
            }),
           
        }),

    }),
})

// RTK provides useHooks for each request which begins with 'use' and ends with 'Query', the getProperty is exported for use on dispactch
export const {
    useGetPropertiesQuery,
    useGetPaginatedPropertiesQuery,
    useGetPropertyByUserIdQuery,
    useAddNewPropertyMutation,
    useDeletePropertyMutation,
    useUpdatePropertyMutation
                } = propertiesApiCalls

     
// Access the result object from our query outside the PropertyApiCalls function
export const selectPropertyResult = propertiesApiCalls.endpoints.getProperties.select()
export const selectPaginatedPropertiesResult = propertiesApiCalls.endpoints.getPaginatedProperties.select()

// Create a memoized selector for  normalized state object with ids and entities
const selectPropertyData = createSelector(
    selectPropertyResult, 
    PropertyResult => PropertyResult.data
)
const selectPaginatedPropertyData = createSelector(
    selectPaginatedPropertiesResult, 
    paginatedPropertyResult => paginatedPropertyResult.data
)


 // Custom Selectors used by RTK for granular control of lookups of the selectPropertyData, LHS is inbuilt , RHS is destructured for understanding 

export const {
    selectAll : selectAllProperty,
    selectById : selectPropertyById,
    selectIds : selectPropertyIds
} = propertyAdapter.getSelectors(state => selectPropertyData(state) ?? initialState)

export const {
    selectAll : selectPaginatedProperties,
} = propertyAdapter.getSelectors(state => selectPaginatedPropertyData(state) ?? initialState)
