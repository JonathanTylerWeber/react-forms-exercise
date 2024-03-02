import React from "react";

function Box(props) {
    function handleDelete() {
        props.deleteBox()
    };

    return (
        <div>
            <div
                className="Box"
                style={{
                    backgroundColor: props.color,
                    width: `${props.width}px`,
                    height: `${props.height}px`
                }}>
            </div>
            <p onClick={handleDelete}>X</p>
        </div>
    );
}

export default Box;
