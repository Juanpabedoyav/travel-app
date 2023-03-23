import { UserSearchContext } from "./UserSearchContext"

interface UserSearchProviderPros {
    children: JSX.Element | JSX.Element[],
}

const INITIAL_STATE = { 
  place: "",
  dates: {
    checkIn: "",
    checkOut: "",
  }
}



export const UserSearchProvider = ({children} : UserSearchProviderPros) => {
  return (
    <UserSearchContext.Provider value={INITIAL_STATE}>
      {children}
    </UserSearchContext.Provider>
  )
}
