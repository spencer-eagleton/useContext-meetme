import { createContext, useContext, useEffect, useState } from 'react';
import fetchUser from '../services/user';

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
      fetchUser()
        .then((fetchedUser) => {
          setUser(fetchedUser)
        })
        .catch((error) => {
          throw new Error(`Error: ${error}`)
        })
    }, [])

    const contextValue = { user }
    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('must use useUser in a UserContext Provider')
    }
    return context
    }

