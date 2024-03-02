import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    function addBox(box) {
        setBoxes(prevBoxes => [...prevBoxes, box]);
    }

    function deleteBox(index) {
        setBoxes(prevBoxes =>
            prevBoxes.filter((_, i) => i !== index)
        );
    }

    return (
        <>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map((box, index) => (
                    <Box
                        key={index}
                        color={box.color}
                        width={box.width}
                        height={box.height}
                        deleteBox={() => deleteBox(index)}
                    />
                ))}
            </div>
        </>
    );
}

export default BoxList;
