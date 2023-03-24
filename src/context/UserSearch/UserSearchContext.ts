import { createContext } from "react"

export interface UserSearchContextProps {
     place?:  string ,
     checkIn?: string ,
     checkOut?: string ,
     dispatch:any  
}

export const UserSearchContext = createContext({} as UserSearchContextProps)