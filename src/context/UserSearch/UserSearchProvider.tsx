import { useReducer } from "react"
import { UserSearchContext } from "./UserSearchContext"
import { userSearchReducer } from "./UserSearchReducer"
import { Reservation } from "../../interfaces/users"

interface UserSearchProviderPros {
    children: JSX.Element | JSX.Element[],
}

export interface UserSearchState { 
  place?:  string,
  checkIn?: string,
  checkOut?: string,
  reservation?: Reservation[],
  
}

const INITIAL_STATE: UserSearchState = { 
  place: "",
  checkIn:"",
  checkOut:"",
  reservation: [],
  
}

export const UserSearchProvider = ({children} : UserSearchProviderPros) => {

  const [state, dispatch] = useReducer( userSearchReducer, INITIAL_STATE)
 
  return (
    <UserSearchContext.Provider value={
      {
        ...state,
        dispatch
      }
    }>
      {children}
    </UserSearchContext.Provider>
  )
}
