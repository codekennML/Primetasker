import { 
    createSelector,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/apiSlice"

    const notesAdapter =  createEntityAdapter({
            // Sort note according by most recent based on date created

        // sortComparer : ((a,b) => b.date.localeCompare(a.date))
    })

        // unpopulated initial  state of adapter
    const initialState =  noteAdapter.getInitialState()

// export const notelice = createSlice({
//     name:'note',
//     initialState,
//     reducers: (state,action) => {

//     }
// })

    // EndPoints injected to our api for everything note

export const notesApiCalls =  apiSlice.injectEndpoints({
    endpoints: builder => ({
        // Gets everything associated with the baseUrl/note Endpoint
          getNote : builder.query({
            query : () => '/note' ,

        // Get the response from the received object and populate our state
            transformResponse: response => {
                return notesAdapter.setAll(initialState, response)},
            
        // Use response to granulate lookup tags for caching and invalidation
            providesTag : (result, error, arg ) => 
                [
                    {type : 'Note' , id : 'ids'},
                    ...result.ids.map( id  => ({type : 'Note',  id}))
                ]

          }),

        //Get all note by an Individual user 

          getNoteByUserId : builder.query({
            query : id  => `/note/?userId=${id}`,
            transformResponse : response => {
               return notesAdapter.setAll(initialState, response)
            },
            providesTags : (result, error, arg ) => [
                {type : 'Note', id : 'ids'},
                ...result.ids.map(id  => ({type : 'Note', id}))

            ]

          }),
        
        // --------- Add a new Individual Note

          addNewNote : builder.mutation({
            query: Note =>  ({
                url : '/note',
                method : 'POST',
                body : {
                    ...Note,
                    userId : Number(Note.userId) 
                },
                invalidatesTag : [
                    {type : 'Note',  id : 'ids'}
                ]
            })

          }),

        // ---------Update Individual Note

          updateNote : builder.mutation({
            query: initialNote =>  ({
                url : `/note/${initialNote.id} `,
                method : 'POST',
                body : {
                    ...initialNote,
                },
                invalidatesTags : [
                    {type : 'Note',  id : arg.id }
                ]
            }),

          }),

        // ---------Delete Individual Note
          deleteNote : builder.mutation({
            query : ({ id }) =>  ({
                url : `/note/${id}`,
                method : 'DELETE',
                body: {id },
                invalidatesTags : [
                    {type : 'Note',  id : arg.id }
                ]
            }),
           
        }),

    }),
})

// RTK provides useHooks for each request which begins with 'use' and ends with 'Query', the getnote is exported for use on dispactch
export const {
    useGetNoteQuery,
    useGetNoteByUserIdQuery,
    useAddNewNoteMutation,
    useDeleteNoteMutation,
    useUpdateNoteMutation
                } = notesApiCalls

     
// Access the result object from our query outside the NoteApiCalls function
export const selectNoteResult = noteApiCalls.endpoints.getnote.select()

// Create a memoized selector for  normalized state object with ids and entities
const selectNoteData = createSelector(
    selectNoteResult, 
    noteResult => noteResult.data
)


 // Custom Selectors used by RTK for granular control of lookups of the selectnoteData, LHS is inbuilt , RHS is destructured for understanding 

export const {
    selectAll : selectAllnote,
    selectById : selectNoteById,
    selectIds : selectNoteIds
} = notesAdapter.getSelectors(state => selectNoteData(state) ?? initialState)

