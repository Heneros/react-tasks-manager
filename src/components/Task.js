import React from 'react'

export default function Tasks({ name, description }) {
    return (
        <div className='item-task' style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="text" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <h5>{name} </h5>
                <p>{description} </p>
            </div>
        </div>
    )
}
