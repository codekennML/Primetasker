import { createSlice } from "@reduxjs/toolkit";
const initialState  = {
    dark : false
}

const themeSlice =  createSlice({
    name:'darkMode',
    initialState,
    reducers : {
        setDarkMode : (state, action) => {
            state.dark = !state.dark
        }
    }
})

export const {setDarkMode } = themeSlice.actions
export default themeSlice.reducer