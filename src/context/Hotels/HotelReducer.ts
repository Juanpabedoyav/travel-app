import { Hotel, NewHotel } from "../../interfaces/hotels"
import { HotelState } from "./HotelProvider"

type HotelAction = 
|{ type: "SET_HOTELS", payload: Hotel[] }
|{ type: "SET_NEWHOTELS", payload: NewHotel[]  }


export const  HotelReducer = ( state:HotelState, action: HotelAction): HotelState => {
  switch (action.type) {
  case "SET_HOTELS" :
    return{
      ...state,
      hotels: action.payload
    }
  case "SET_NEWHOTELS" :
    return{
      ...state ,
      newHotels: [...action.payload], 
    }
  default:
    return state
  }


}