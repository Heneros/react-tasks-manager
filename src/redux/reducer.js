import { createSlice } from "@reduxjs/toolkit";

// const initialState = JSON.parse(localStorage.getItem("tasks")) || [];


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
            state.push(action.payload);
            localStorage.setItem("tasks", JSON.stringify(state));
        },

        editTask: (state, action) => {
            const { id, name, description } = action.payload;
            const taskIndex = state.findIndex((task) => task.id === task.id);

            //В коде if (taskIndex !== -1) проверяется, был ли найден индекс задачи в состоянии state
            // Если taskIndex не равен -1, это означает, что задача с указанным id была найдена в состоянии.
            if (taskIndex !== -1) {
                ///В этой строке происходит замена задачи в массиве state новым объектом, содержащим обновленные значения id, name и description.
                state[taskIndex] = { id, name, description };
                localStorage.setItem('tasks', JSON.stringify(state));
            }
        },
        searchTask: (state = initialState, action) => {
            ///деструктуризация
            const { searchText } = action.payload;
            const filteredTasks = state.tasks.filter((task) => {
                const nameMatch = task.name && task.name.toLowerCase().includes(searchText.toLowerCase());
                const descriptionMatch = task.description && task.description.toLowerCase().includes(searchText.toLowerCase());
                return nameMatch || descriptionMatch;
            });
            return { ...state, searchResults: filteredTasks };
        }



    },
});




export const { addTask, editTask, searchTask } = reducerTasks.actions;
export const reducer = reducerTasks.reducer;


