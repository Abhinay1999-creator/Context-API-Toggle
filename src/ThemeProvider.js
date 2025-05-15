import React, { createContext, useState } from 'react'


export const Theme = createContext();

const ThemeProvider = ({children}) => {

    const [toggle, setToggle] = useState('light');

    const themeStyles = {
        light: {
         
            backgroundColor: "white",
             height:'100vh',
             padding:'2rem'
        },
        dark: {
            
            backgroundColor: "yellow",
            height:'100vh',
            padding:'2rem'
        }
    }

    const ToggleTheme = () => {
        setToggle(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <Theme.Provider value={{ toggle, themeStyles, ToggleTheme }}>
            <div>
                <h1>Theme Provider</h1>
                <div>{children}</div>
            </div>
        </Theme.Provider>
    )
}

export default ThemeProvider;