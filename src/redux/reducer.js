import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateTask } from "../utils/taskUtil";



const initialState = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : { tasks: [] };


export const editTask = createAsyncThunk("tasks/updatePost", async (updatedTask, { getState }) => {
    // const { id } = initialState;
    const state = getState();

    try {
        // const tasks = state.tasks;
        //   const updatedTasks = state.tasks.map(task => (task.id === id ? initialState : task));
        //   return updateTask(updatedTasks);
        const updatedTasks = state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        return updateTask(updatedTasks);

        // updateLocalStorage(updatedTasks);

        // return updatedTask;
        // console.log(id);
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
        builder.addCase(editTask.fulfilled, (state, action) => {
            if (!action.payload || !state.tasks) {
                console.log("Update could not complete");
                console.log(action.payload);
                return;
            }
            const { id } = action.payload;
            const tasks = state.tasks.filter((task) => task.id !== id);
            state.tasks = [...tasks, action.payload];
        });
    },
});



export const selectTaskById = (state, id) =>
    state.tasks.find(task => task.id === id);

export const { addTask, searchTask, removeTask } = reducerTasks.actions;
export const reducer = reducerTasks.reducer;


