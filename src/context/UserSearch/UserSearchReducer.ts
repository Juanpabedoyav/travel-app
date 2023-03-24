import { UserSearchState } from "./UserSearchProvider"

type UserSearchAction = 
|{ type: "NEW_SEARCH", payload: UserSearchState }


export const  userSearchReducer = ( state: UserSearchState, action: UserSearchAction): UserSearchState => {
  switch (action.type) {
  case "NEW_SEARCH" :
    return{
      ...state,
      place: action.payload.place,
      checkIn: action.payload.checkIn,
      checkOut: action.payload.checkOut,
    }

  default:
    return state
  }


}