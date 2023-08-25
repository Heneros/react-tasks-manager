import { createSlice } from "@reduxjs/toolkit";


const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
const initialState = {
    tasks: tasksFromLocalStorage || [],
    searchResults: []
};


const reducerTasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = action.payload;
            ///ищет текущую задачу
            const existingTask = state.tasks.find((task) => task.id === newTask.id);
            if (existingTask) {
                alert("Task with the same ID already exists.");
                return;
            }
            ////Передается значение в updatedTasks
            const updatedTasks = [...state.tasks, newTask];
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            ///объектный литерал
            return {
                ...state,
                tasks: updatedTasks
            }

        },
        searchTask: (state = initialState, action) => {
            const { searchText } = action.payload;
            const filteredText = tasksFromLocalStorage.filter(task => {
                // const nameMatch =  task.name &&
                const nameMatch = task.name && task.name.toLowerCase().includes(searchText.toLowerCase());
                // const description = task.description && task.description.toLowerCase().includes(searchText.toLowerCase());

                return nameMatch;
                // const description;
            });
            state.searchResults = filteredText;
        },
        updateTasks: (state, action) => {
            state.tasks = action.payload;

        }
    },
});




export const { addTask, editTask, searchTask, updateTasks } = reducerTasks.actions;
export const reducer = reducerTasks.reducer;


