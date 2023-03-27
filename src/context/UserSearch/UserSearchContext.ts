import { createContext } from "react"
import { Reservation } from "../../interfaces/users"

export interface UserSearchContextProps {
     place?:  string ,
     checkIn?: string ,
     checkOut?: string ,
     dispatch:any,
     reservation?: Reservation[],
}

export const UserSearchContext = createContext({} as UserSearchContextProps)