import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext(0);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export default function AppContextProvider({ children }){

    const [activeSideBar, setActiveSideBar] = useState(true);

    return <AppContext.Provider value={{ activeSideBar, setActiveSideBar }}>
        {children}
    </AppContext.Provider>
}


export const useAppContext = () => useContext(AppContext)
