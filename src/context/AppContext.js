import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext(0);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export default function AppContextProvider({ children })
{
    // For Sidebar whether is opened or not
    const [activeSideBar, setActiveSideBar] = useState(true);

    // For Navbar icon buttons
    const [isClicked, setIsClicked] = useState(initialState);

    function navbarBtnHandler(title) 
    { 
        setIsClicked({...initialState, [title]: true}); 
    }

    // For detecting screen size (Web or Mobile)
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    // For App Theming
    const storedColor = localStorage.getItem('color');
    const storedTheme = localStorage.getItem('theme');

    const [currentColor, setCurrentColor] = useState(storedColor);
    const [currentMode, setCurrentMode] = useState(storedTheme);
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
            isClicked, setIsClicked, navbarBtnHandler,
            screenSize, setScreenSize,
            currentColor, setColor,
            currentMode, setMode,
            activeThemeBar, setActiveThemeBar
        }}>
        {children}
    </AppContext.Provider>
}


export const useAppContext = () => useContext(AppContext)
