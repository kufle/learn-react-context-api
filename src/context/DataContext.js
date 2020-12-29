import React, {createContext, useState} from 'react';

export const DataContext = createContext();

const initialState = [
    {
        id: 1,
        title: 'this is title'
    }
]

export const DataProvider = (props) => {
    const [lists,setList] = useState(initialState);
    const add = title => {
        const newTitle = {
            id: lists.length+1,
            title: title
        }

        const newLists = [...lists,newTitle];
        setList(newLists);
    }
    const del = id => {
        setList(lists.filter(item=> item.id !== id));
    }
    return(
        <DataContext.Provider value={{ lists, add, del }}>
            {props.children}
        </DataContext.Provider>
    )
}