import { createSlice } from "@reduxjs/toolkit";
import { updateTask } from "../utils/taskUtil";



const initialState = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : { tasks: [] };


const reducerTasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const item = action.payload;
            state.tasks = [...state.tasks, item];
            return updateTask(state);
        },
        searchTask: (state, action) => {
            const { searchText } = action.payload;

            const filteredText = state.tasks.filter(task => {
                const nameMatch = task.name && task.name.toLowerCase().includes(searchText.toLowerCase());
                return nameMatch;
            });
            state.searchResults = filteredText;
            state.filterText = searchText;
        },

        removeTask: (state, action) => {

            const taskId = action.payload;

            let updatedTasks = state.tasks.filter(task => {
                return task.id !== taskId;
            });

            state.tasks = updatedTasks;

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        }
    },
});




export const { addTask, editTask, searchTask, removeTask } = reducerTasks.actions;
export const reducer = reducerTasks.reducer;


