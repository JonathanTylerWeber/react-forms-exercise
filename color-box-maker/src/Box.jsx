import React from "react";
import "./Box.css";

function Box(props) {
    function handleDelete() {
        props.deleteBox();
    }

    return (
        <div className="Box-wrapper">
            <div
                className="Box"
                style={{
                    backgroundColor: props.color,
                    width: `${props.width}px`,
                    height: `${props.height}px`
                }}
            ></div>
            <p className="deleteButton" onClick={handleDelete}>X</p>
        </div>
    );
}

export default Box;
