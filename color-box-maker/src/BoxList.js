import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";
import Box from "./Box";
import { v4 as uuid } from "uuid";

function BoxList() {
    const [boxes, setBoxes] = useState([]);


    function handleRemove(id) {
        setBoxes(boxes.filter(box => box.id !== id));
    }


    /** Add new box object to boxList. */
    const addBox = box => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    };
    // end addBox

    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox={addBox} />
            <div className="BoxList">
                {boxes.map(({ id, color, width, height }) => <Box color={color} width={width} height={height} key={id} handleRemove={evt => handleRemove(id)} />)}
            </div>
        </div>
    );
};
// end

export default BoxList;
