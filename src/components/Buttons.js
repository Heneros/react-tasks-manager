import React, { useState } from 'react'
import { useTasks } from '../contexts/TasksContext'

export default function Buttons() {
    const { tasks } = useTasks();
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') {
            return true;
        }
    })
    return (
        <div></div>
    )
}
