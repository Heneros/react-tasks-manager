import React, { useState } from 'react'
import { useTasks } from '../contexts/TasksContext'
import Task from './Task';

export default function Buttons() {
    const { tasks } = useTasks();
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'progress') {
            return !task.completed;
        }
    })
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('progress')}>Progress</button>
            <div className="tasks"
                style={{ displat: "flex", flex: "1", justifyContent: "center" }}
            >
                {filteredTasks.map(task => (
                    <Task key={task.id}
                        name={task.name}
                        description={task.description} />
                ))}
            </div>
        </div>
    )
}
