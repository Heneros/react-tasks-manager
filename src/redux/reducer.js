import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];



const reducerTasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("tasks", JSON.stringify(state));
        },

        editTask: (state, action) => {
            const { id, name, description } = action.payload;
            const taskIndex = state.findIndex((task) => task.id === task.id);
            if (taskIndex !== -1) {
                state[taskIndex] = { id, name, description };
                localStorage.setItem('tasks', JSON.stringify(state));
            }
        }

        
    },
});




export const { addTask, editTask } = reducerTasks.actions;
export const reducer = reducerTasks.reducer;


