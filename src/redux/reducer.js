import { createSlice } from "@reduxjs/toolkit";
import { updateTask } from "../utils/taskUtil";

// const tasksFromLocalStorage = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : { tasks: [] }
// const initialState = {
//     tasks: tasksFromLocalStorage || [],
//     searchResults: []
// };

const initialState = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : { tasks: [] };


const reducerTasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const item = action.payload;
            ///ищет текущую задачу
            const existingTask = state.tasks.find((task) => task.id === item.id);
            if (existingTask) {
                // alert("Task with the same ID already exists.");
                // return;
                state.tasks.map((x) => x.id === existingTask.id ? item : x);
            } else {
                state.tasks = [...state.tasks, item];
            }
            return updateTask(state);
            // ////Передается значение в updatedTasks
            // const updatedTasks = [...state.tasks, newTask];
            // localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            // return {
            //     ...state,
            //     tasks: updatedTasks
            // }
        },
        searchTask: (state, action) => {
            const { searchText } = action.payload;

            const filteredText = state.tasks.filter(task => {
                const nameMatch = task.name && task.name.toLowerCase().includes(searchText.toLowerCase());
                return nameMatch;
            });

            state.searchResults = filteredText;

            // Добавьте это, чтобы обновить текст фильтрации в хранилище
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


