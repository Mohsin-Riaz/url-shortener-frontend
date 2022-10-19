import React, { useContext, useEffect, useState } from 'react'
import { apiGetLinks } from './apiHandler/api-calls'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [shortURL, setShortURL] = useState('')
    const [links, setLinks] = useState([])

    useEffect(() => {
        const getLinks = async () => {
            const newLinks = await apiGetLinks()
            if (!newLinks) {
                console.log('No links')
            } else {
                setLinks(newLinks)
            }
        }
        getLinks()
    }, [])

    return (
        <AppContext.Provider
            value={{
                shortURL,
                setShortURL,
                links,
                setLinks,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
