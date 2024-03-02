import React from "react";
import './Todo.css'

function Todo(props) {
    function handleDelete() {
        props.deleteTodo();
    }

    return (
        <div className="Todo-wrapper">
            <div className="Todo">
                <p>Todo: {props.text}</p>
            </div>
            <p className="deleteButton" onClick={handleDelete}>X</p>
        </div>
    );
}

export default Todo;
