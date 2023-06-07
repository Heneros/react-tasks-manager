import React, { useState } from 'react'
import { useTasks } from '../contexts/TasksContext'

export default function Buttons() {
    const { tasks } = useTasks();
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'completed') {
            return task.status === 'completed';
        } else if (filter === 'progress') {
            return task.status === 'progress';
        }
    })
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('progress')}>Progress</button>
            <button onClick={() => setFilter('progress')}>Progress</button>
        </div>
    )
}
