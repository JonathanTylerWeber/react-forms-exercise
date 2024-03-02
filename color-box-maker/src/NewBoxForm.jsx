import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        color: "",
        width: "",
        height: ""
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
        const { color, width, height } = formData;
        addBox({ ...formData });
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input
                id="color"
                type="text"
                name="color"
                placeholder="color"
                value={formData.color}
                onChange={handleChange}
            />

            <label htmlFor="width">Width</label>
            <input
                type="text"
                placeholder="width"
                name="width"
                id="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height</label>
            <input
                type="text"
                placeholder="height"
                name="height"
                id="height"
                value={formData.height}
                onChange={handleChange}
            />

            <button>Make new box!</button>
        </form>
    )
}

export default NewBoxForm;