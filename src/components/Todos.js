import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Todos = () => {
    const {lists, del} = useContext(DataContext);
    const handleDelete = id => {
        del(id);
    }
    return(
        <ul>
            {lists.map(item =>
                <li key={item.id}>
                    {item.title}
                    <button onClick={() => handleDelete(item.id)}>x</button>
                </li>
            )}
        </ul>
    )
}

export default Todos;