import React from 'react'
import { useSelector } from 'react-redux'
import { selectNoteById } from './NotesSlice'
import { Link, useNavigate } from 'react-router-dom'

const Note = ( { noteId }) => {
    const navigate = useNavigate()
    const editNote = () =>{ navigate(`/notes/${noteId}`)} 
    const note =  useSelector(state => selectNoteById(state, noteId))


   

  return (
    
    <tr>
        <td>{note.id}</td>
        <td>{note.title}</td>
        <td>{note.body}</td>
        <td>{note.username}</td>
        <td className=''> 
                <button onClick={EditPost}> Edit </button>  
        </td>
        <td className=''>
            <button onClick={DeletePost}> Delete </button>  
        </td>
    </tr>
  )
}

export default Note