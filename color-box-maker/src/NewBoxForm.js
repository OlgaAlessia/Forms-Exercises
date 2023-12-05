import React, { useState } from "react";
import './NewBoxForm.css';

/** Form for creating a new box.
 *
 * Has state for the color/width/height/ of the item; on submission,
 * sends {color, width, height} to fn rec'd from parent.
 *
 */

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { color: "", width: 0, height: 0 };
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Send {color, width, height} to parent & clear form. */
    const handleSubmit = evt => {
        evt.preventDefault();
        addBox(formData);
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
        <label htmlFor="color">Color:</label>
        <input
            id="color"
            name="color"
            type="text"
            value={formData.color}
            onChange={handleChange}
        />
        <label htmlFor="width">Width:</label>
        <input
            id="width"
            name="width"
            type="number"
            value={formData.width}
            onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
            id="height"
            name="height"
            type="number"
            value={formData.height}
            onChange={handleChange}
        />
        <br/>
        <button>Add a new box!</button>
    </form>
    );
};
//end


export default NewBoxForm;