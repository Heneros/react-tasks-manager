import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from './reducer';
import { reducer as addTodoReducer } from "./reducer";



const store = configureStore({
    reducer: addTodoReducer
});

export default store;