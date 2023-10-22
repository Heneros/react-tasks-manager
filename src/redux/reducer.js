import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateTask } from "../utils/taskUtil";



const initialState = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : { tasks: [] };


const reducerTasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const item = action.payload;
            if (!state.tasks) {
                state.tasks = [];
            }
            const existItem = state.tasks.find((x) => x.id === item.id);
            if (existItem) {
                console.log(true);
            } else {
                console.log(false);
                state.tasks = [...state.tasks, item];
            }
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

        editTask: (state, action) => {
            if (!action.payload.id) {
                console.log('Update could not complete');
                return
            }
            const updatedTask = action.payload;
            const updatedTasks = state.tasks.map(task => {
                if (task.id === updatedTask.id) {
                    return updatedTask;
                }
                return task;
            });
            state.tasks = updatedTasks;
            return updateTask(state);
        },
        removeTask: (state, action) => {
            const taskId = action.payload;
            let updatedTasks = state.tasks.filter(task => {
                return task.id !== taskId;
            });
            state.tasks = updatedTasks;
            return updateTask(state);
        }
    },
    extraReducers(builder) { },
});



export const selectTaskById = (state, id) =>
    state.tasks.find(task => task.id === id);

export const { addTask, searchTask, editTask, removeTask } = reducerTasks.actions;
export const reducer = reducerTasks.reducer;


