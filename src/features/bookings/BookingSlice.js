import { 
    createSelector,
    createEntityAdapter,
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/apiSlice"
import { add } from 'date-fns'

    const bookingsAdapter =  createEntityAdapter({
            // Sort bookings according by most recent based on date created

        // sortComparer : ((a,b) => b.date.localeCompare(a.date))
    })

        // unpopulated initial  state of adapter
    const initialState =  bookingsAdapter.getInitialState()

    // EndPoints injected to our api for everything bookings
export const bookingsApiCalls =  apiSlice.injectEndpoints({
    endpoints: builder => ({
        // Gets everything associated with the baseUrl/bookings Endpoint
          getBookings : builder.query({
            query : () => '/users' ,

        // Get the response from the received object and populate our state
            transformResponse: response => {
                let dayIn = 1 
                let dayOut = 6
                 response.map(booking => {
                if(!booking?.checkInDate) booking.checkInDate = add(new Date(),{days : dayIn++}).toISOString()
                if(!booking?.checkOutDate) booking.checkOutDate = add(new Date(),{days : dayOut++}).toISOString()
                        return booking
                })
                return bookingsAdapter.setAll(initialState, response)
            },
            
        // Use response to granulate lookup tags for caching and invalidation
            providesTag : (result, error, arg ) => 
                [
                    {type : 'Bookings' , id : 'ids'},
                    ...result.ids.map( id  => ({type : 'Bookings',  id}))
                ]

          }),
          addNewBooking : builder.mutation({
            query: Booking =>  ({
                url : '/booking/add',
                method : 'POST',
                body : {
                    ...Booking,
                    userId : Number(Booking.userId) 
                },
                invalidatesTag : (result, error, arg ) => 
                [
                    {type : 'Booking',  id : 'ids'}
                ]
            })

          }),
           // ---------Update Individual Booking

           updateBooking : builder.mutation({
            query: initialBooking =>  ({
                url : `/booking/${initialBooking.id} `,
                method : 'PATCH',
                body : {
                    ...initialBooking,
                },
                invalidatesTags : (result, error, arg ) =>
                 [
                    {type : 'Bookings',  id : arg.id }
                ]
            }),

          }),

        // ---------Delete Individual Booking
          deleteBooking : builder.mutation({
            query : ({ id }) =>  ({
                url : `/Booking/${id}`,
                method : 'DELETE',
                body: {id },
                invalidatesTags : (result, error, arg ) => [
                    {type : 'Bookings',  id : arg.id }
                ]
            }),
           
        }),

    }),
})

// RTK provides useHooks for each request which begins with 'use' and ends with 'Query', the getbookings is exported for use on dispactch
export const {
    useGetBookingsQuery,
    useAddNewBookingMutation,
    useUpdateBookingMutation,
    useDeleteBookingMutation
            
            } = bookingsApiCalls

     
// Access the result object from our query outside the postApiCalls function
export const selectBookingsResult = bookingsApiCalls.endpoints.getBookings.select()

// Create a memoized selector for  normalized state object with ids and entities
const selectBookingsData = createSelector(
    selectBookingsResult, 
    bookingsResult => bookingsResult.data
)


 // Custom Selectors used by RTK for granular control of lookups of the selectbookingsData, LHS is inbuilt , RHS is destructured for understanding 

export const {
    selectAll : selectAllbookings,
    selectById : selectBookingById,
    selectIds : selectBookingIds
} = bookingsAdapter.getSelectors(state => selectBookingsData(state) ?? initialState)

