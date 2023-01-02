import React from 'react'
import { useSelector } from 'react-redux'
import useAuth from '../../hooks/useAuth'
import Note from './Note'
import { useGetNoteQuery } from './NotesSlice'


const notesList = () => {
    const {
      data: notes,
      isLoading,
      isSuccess, 
      isError, 
      error 
    } =  useGetNoteQuery()

const {username, isManager, isAdmin } =  useAuth()

let content;
            if(isLoading) content =  <p>Loading</p>

            if(isError) content = <p>{error?.data?.message}</p>

            if(isSuccess){
                const { ids, entities } = notes  

                let filterIds;
              (isManager || isAdmin ) ? filterIds = [...ids] : filterIds = ids.filter(noteId => entities[noteId].username === username)

                const notesTableContent =  ids?.length && filterIds.map(noteId => <Note key = {noteId} noteId = {noteId} /> )
                      
        
                content =   <table>

                                <thead>
                                        <tr>
                                            <td>Note ID</td>
                                            <td>Note Title </td>
                                            <td>Description</td>
                                            <td>Created By</td>
                                            <td colSpan={2}>Actions</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                            {notesTableContent}
            
                                    </tbody>
                        
                            </table>        
                        }


  return content
}

export default notesList