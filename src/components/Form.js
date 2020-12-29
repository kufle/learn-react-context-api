import React, {useContext, useState} from 'react';
import {DataContext} from '../context/DataContext';

const Form = () => {
    const {add} = useContext(DataContext);
    const [text,setText] = useState("");
    const handleChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        add(text);
        setText("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange}/>
            <button type="submit">Save</button>
        </form>
    )    
}

export default Form;