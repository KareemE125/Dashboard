import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext(0);


export default function AppContextProvider({ children })
{
    // For Sidebar whether is opened or not
    const [activeSideBar, setActiveSideBar] = useState(true);

    // For detecting screen size (Web or Mobile)
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    // For App Theming
    const storedColor = localStorage.getItem('color');
    const storedTheme = localStorage.getItem('theme');

    const [currentColor, setCurrentColor] = useState(storedColor || '#1E4DB7');
    const [currentMode, setCurrentMode] = useState(storedTheme || 'Dark');
    const [activeThemeBar, setActiveThemeBar] = useState(false);
    
    function setColor(color)
    { 
        setCurrentColor(color); 
        localStorage.setItem('color', color); 
        setActiveThemeBar(false); 
    }
    
    function setMode(event)
    { 
        setCurrentMode(event.target.value); 
        localStorage.setItem('theme', event.target.value);  
        setActiveThemeBar(false);  
    }

    return <AppContext.Provider value={{ 
            activeSideBar, setActiveSideBar, 
            screenSize, setScreenSize,
            currentColor, setColor,
            currentMode, setMode,
            activeThemeBar, setActiveThemeBar
        }}>
        {children}
    </AppContext.Provider>
}


export const useAppContext = () => useContext(AppContext)
