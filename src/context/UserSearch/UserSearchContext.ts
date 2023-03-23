import { createContext } from "react"


export interface UserSearchContextProps {
    place?: string,
    dates?:{
        checkIn?: string,
        checkOut?: string
    },
}

export const UserSearchContext = createContext({} as UserSearchContextProps)