import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


const addTodoReducer = createSlice({
    name: "tasks",
    initialState,
    reducer: {
        addTask: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("tasks", JSON.stringify(state));
        }
    },
});


export const { addTask } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;


