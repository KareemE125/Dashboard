import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext(0);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export default function AppContextProvider({ children }){

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

    return <AppContext.Provider value={{ 
            activeSideBar, setActiveSideBar, 
            isClicked, setIsClicked, navbarBtnHandler,
            screenSize, setScreenSize
        }}>
        {children}
    </AppContext.Provider>
}


export const useAppContext = () => useContext(AppContext)
