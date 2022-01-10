import { createContext, useState, useEffect } from "react";

export const Context = createContext({});

export const ContextProvider = props => {
    
    const [sessionData, setSessionData] = useState({
        username: window.localStorage.getItem('user') || '',
    });

    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(sessionData));
    }, [sessionData]);

    return <Context.Provider value={[sessionData, setSessionData]}>{props.children}</Context.Provider>
}