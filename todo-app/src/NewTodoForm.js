import React, { useState } from "react";
import './NewTodoForm.css';

/** Form for creating a new box.
 *
 * Has state for the color/width/height/ of the item; on submission,
 * sends {color, width, height} to fn rec'd from parent.
 *
 */

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = { task: "" }; //, isCompleted: false };
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Send {task} to parent & clear form. */
    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE);
    };

    /** Update local state w/curr state of input elem */

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => (
            { ...fData, [name]: value }
        ));
    };


     /** render form */
     return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input
                id="task"
                name="task"
                type="text"
                value={formData.task}
                onChange={handleChange}
            />
            <br/>
            <button>Add a Todo!</button>
        </form>
        );
};
//end

export default NewTodoForm;