import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos(prevTodos => [...prevTodos, todo]);
    }

    function deleteTodo(index) {
        setTodos(prevTodos =>
            prevTodos.filter((_, i) => i !== index)
        );
    }

    return (
        <>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        text={todo.text}
                        deleteTodo={() => deleteTodo(index)}
                    />
                ))}
            </div>
        </>
    );
}

export default TodoList;
