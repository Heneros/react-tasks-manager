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

            // // Создаем новый массив, добавляя новую задачу
            // const updatedTasks = [...state.tasks, newTask];

            // // Обновляем данные в localStorage
            // localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            // // Возвращаем обновленный state с новым массивом задач
            // return {
            //     ...state,
            //     tasks: updatedTasks,
            // };

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
            const { searchText } = action.payload;
            const filteredText = tasksFromLocalStorage.filter(task => {
                // const nameMatch =  task.name &&
                const nameMatch = task.name && task.name.toLowerCase().includes(searchText.toLowerCase());
                // const description = task.description && task.description.toLowerCase().includes(searchText.toLowerCase());

                return nameMatch;
                // const description;
            });
            state.searchResults = filteredText;
        }



    },
});




export const { addTask, editTask, searchTask } = reducerTasks.actions;
export const reducer = reducerTasks.reducer;


