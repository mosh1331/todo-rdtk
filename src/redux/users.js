import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
    name:"users",
    initialState:{
        entries :[]
    },
    reducers:{
        addEntry:(state,action)=>{
            state.entries.push(action.payload)
        },
        removeEntry:(state,action)=>{
            state.entries = state.entries.filter(i => i.id != action.payload)
        }
    }
    
})

export const {addEntry,removeEntry} = usersSlice.actions;

export default usersSlice.reducer;