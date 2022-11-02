import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        listItems :[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.listItems.push(action.payload)
        },
        removeTodo:(state,action)=>{
            state.listItems = state.listItems.filter(i => i !== action.payload)
        }
    }
    
})

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;