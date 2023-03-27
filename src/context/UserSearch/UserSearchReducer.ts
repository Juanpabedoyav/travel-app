import { UserSearchState } from "./UserSearchProvider"

type UserSearchAction = 
|{ type: "NEW_SEARCH", payload: UserSearchState }
|{ type: "NEW_RESERVATION", payload: UserSearchState }


export const  userSearchReducer = ( state: UserSearchState, action: UserSearchAction): UserSearchState => {
  switch (action.type) {
  case "NEW_SEARCH" :
    return{
      ...state,
      place: action.payload.place,
      checkIn: action.payload.checkIn,
      checkOut: action.payload.checkOut,
    }
  case "NEW_RESERVATION" :
    return{
      ...state,
      reservation: action.payload.reservation,
    }

  default:
    return state
  }


}