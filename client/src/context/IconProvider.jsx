import {  useState } from "react";
import { IconContext } from "./IconContext";



export const IconProvider = ({ children }) => {
    const [icon, setIcon] = useState(() => localStorage.getItem('icon') || 'rounded-xl')

    return (
        <IconContext.Provider value={{ icon, setIcon }}>
            {children}
        </IconContext.Provider>
    )
}