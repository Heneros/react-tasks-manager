import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from './reducer';
import { reducer as reducerTasks } from "./reducer";



const store = configureStore({
    reducer: reducerTasks
});

export default store;