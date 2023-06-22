import { createSlice } from "@reduxjs/toolkit";

// const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    searchResults: []
}


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
        searchTask: (state, action) => {
            const { name, description } = action.payload;
            const searchText = state.filter((task) =>
                ///поиск 
                task.name.toLowerCase().includes(name.toLowerCase()) ||
                task.description.toLowerCase().includes(description.toLowerCase())

            )
            state.searchResults = searchText;
        }



    },
});




export const { addTask, editTask, searchTask } = reducerTasks.actions;
export const reducer = reducerTasks.reducer;


