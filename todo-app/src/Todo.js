import React from "react";


const Todo = ({ task, handleRemove}) => {

    //const classes = `Todo ${isCompleted ? "Todo-completed" : ""}`;

    return (
        <div>
            <p className="Todo">{task}</p>
            <button className="Todo-btn" onClick={handleRemove}> X </button>
            <button className="Todo-btn"> Mark as completed </button>
        </div>
    )
}

export default Todo;
