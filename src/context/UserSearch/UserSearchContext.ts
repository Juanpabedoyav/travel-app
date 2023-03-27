import { createContext } from "react"
import { ReservationUser } from "../../interfaces/users"

export interface UserSearchContextProps {
     place?:  string ,
     checkIn?: string ,
     checkOut?: string ,
     dispatch:any,
     reservation?: ReservationUser[],
}

export const UserSearchContext = createContext({} as UserSearchContextProps)