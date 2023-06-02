import React, { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuidV4 } from 'uuid';

const TasksContext = React.createContext();

export function useTasks() {
    return useContext(TasksContext);
}


export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage("tasks", []);



    function addTask({ name, description }) {
        setTasks(prevTask => {
            if (prevTask.find(task => task.name === name)) {
                return prevTask;
            }
            return [...prevTask, { id: uuidV4(), name, description }]
        });
    }

    return (
        <TasksContext.Provider value={{ tasks, addTask }}>
            {children}
        </TasksContext.Provider>
    )

}