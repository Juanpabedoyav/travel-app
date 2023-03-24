import { useReducer } from "react"
import { UserSearchContext } from "./UserSearchContext"
import { userSearchReducer } from "./UserSearchReducer"

interface UserSearchProviderPros {
    children: JSX.Element | JSX.Element[],
}

export interface UserSearchState { 
  place?:  string,
  checkIn?: string,
  checkOut?: string,
  
}

const INITIAL_STATE: UserSearchState = { 
  place: "",
  checkIn:"",
  checkOut:"",
  
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
