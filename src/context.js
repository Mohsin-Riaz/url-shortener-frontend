import React, { useContext, useEffect, useState } from 'react'
import { apiGetLinks } from './apiHandler/api-calls'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [shortURL, setShortURL] = useState('')
    const [loading, setLoading] = useState(true)
    const [links, setLinks] = useState([])

    useEffect(() => {
        const getLinks = async () => {
            const newLinks = await apiGetLinks()
            setLinks(newLinks)
        }
        getLinks().then(() => setLoading(false))
    }, [])

    return (
        <AppContext.Provider
            value={{
                shortURL,
                setShortURL,
                loading,
                setLoading,
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
