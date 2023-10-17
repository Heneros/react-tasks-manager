import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateTask } from "../utils/taskUtil";



const initialState = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : { tasks: [] };


export const editTask = createAsyncThunk('tasks/updatePost', async (initialState, { getState }) => {
    const { id } = initialState;
    const state = getState();

    try {
        // const tasks = state.tasks;
        const updatedTasks = state.tasks.map(task => (task.id === id ? initialState : task));
        //   return updateTask(updatedTasks);
        // console.log(updatedTasks);
    } catch (err) {
        console.log(err);
    }
})

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
            // localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return updateTask(state);
        }
    },
    extraReducers(builder) {
        builder
            .addCase(editTask.fulfilled, (state, action) => {
                if (!action.payload || !state.tasks.id) {
                    console.log('Update could not complete');
                    console.log(action.payload);
                    return;
                }
                const { id } = action.payload;
                const tasks = state.tasks.filter(task => task.id !== id);
                state.tasks = [...tasks, action.payload];
            })
    }
});




export const { addTask, searchTask, removeTask } = reducerTasks.actions;
export const reducer = reducerTasks.reducer;


