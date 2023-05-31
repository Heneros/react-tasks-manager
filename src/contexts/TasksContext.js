import React, { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const TasksContext = createContext();

export function useTasks() {
    return useContext(TasksContext);
}


export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage("tasks", []);



    function addTask({ name, desescription }) {
        setTasks(prevTask => {
            if (prevTask.find(task => task.name === name)) {
                return prevTask;
            }
            // return [...prevTask, {id: uuidV}]
        })
    }

    return (
        <TasksContext.Provider value={tasks}>
            {children}
        </TasksContext.Provider>
    )

}