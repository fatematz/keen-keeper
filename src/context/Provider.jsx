'use client'
import {useState} from "react";
import {FriendContext} from "./FriendContext";



const Provider=({children}) => {
    const [cart, setCart] = useState([])
    
    
    const AddCart = (data) => {
    setCart((prevCart) => [data, ...prevCart]); 
};
    return (
       <FriendContext.Provider value={{cart, setCart, AddCart }}> {children} </FriendContext.Provider>
    );
};

export default Provider;