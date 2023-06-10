import React from 'react'

export default function Tasks({ name, description }) {

    const handleRemove = () => {
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks')) || [];

        const index = tasksFromLocalStorage.findIndex(task => task.name === name || task.description === description);


        if (index !== -1) {

            tasksFromLocalStorage.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasksFromLocalStorage));
            window.location.reload();
        }

    }
    return (
        <div className='item-task' style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="text" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <h5>{name} </h5>
                <p>{description} </p>
            </div>
            <button onClick={handleRemove} >Delete</button>
            <button >Edit</button>
        </div>
    )
}
