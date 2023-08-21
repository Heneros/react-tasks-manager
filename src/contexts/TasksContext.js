import React, { createContext, useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuidV4 } from 'uuid';

const TasksContext = React.createContext();

export function useTasks() {
    return useContext(TasksContext);
}


export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage("tasks", []);
    const [filter, setFilter] = useLocalStorage("filter", 'all');


    function addTask({ name, description }) {
        setTasks(prevTasks => {
            if (prevTasks.find(task => task.name === name)) {
                return prevTasks;
            }
            const newTask = {
                id: uuidV4(),
                name,
                description,
                completed: false,
                all: filter === 'all' || filter === 'completed',
                progress: filter === 'all' || filter === 'progress',
            };
            return [...prevTasks, newTask];
        });
    }





    return (
        <TasksContext.Provider value={{
            tasks,
            addTask,
        }}>
            {children}
        </TasksContext.Provider>
    )

}