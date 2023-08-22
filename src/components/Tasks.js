import React from 'react'

export default function Tasks() {

    const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(tasksLocalStorage);


    return (
        <div>Tasks</div>
    )
}
