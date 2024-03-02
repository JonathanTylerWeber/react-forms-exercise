import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        text: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData });
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">New Todo:</label>
            <input
                id="text"
                type="text"
                name="text"
                placeholder="text"
                value={formData.text}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )
}

export default NewTodoForm;