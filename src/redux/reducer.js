import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];



const addTodoReducer = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("tasks", JSON.stringify(state));
        }
    },
});


export const { addTask } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;


