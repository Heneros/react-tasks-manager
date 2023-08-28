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

            return {
                ...state,
                tasks: updatedTasks
            }
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
    },
});




export const { addTask, editTask, searchTask } = reducerTasks.actions;
export const reducer = reducerTasks.reducer;


