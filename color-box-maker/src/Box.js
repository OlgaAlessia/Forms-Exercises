import React from "react";
import "./Box.css";

const Box = ({ color, width, height, handleRemove }) => {

    return (
        <section className="Box">
            <div style={{ backgroundColor: color, width: width + "px", height: height +"px" }} />
            <button onClick={handleRemove} >X</button>
        </section>
    )
}

export default Box;
