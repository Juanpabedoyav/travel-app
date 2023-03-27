import { Hotel, NewHotel } from "../../interfaces/hotels"
import { HotelState } from "./HotelProvider"

type HotelAction = 
|{ type: "SET_HOTELS", payload: Hotel[] }
|{ type: "SET_NEWHOTELS", payload: NewHotel[]  }

// reducer function hotel
export const  HotelReducer = ( state:HotelState, action: HotelAction): HotelState => {
  switch (action.type) {
  // set hotels
  case "SET_HOTELS" :
    return{
      ...state,
      hotels: action.payload
    }
    // set new hotels
  case "SET_NEWHOTELS" :
    return{
      ...state ,
      newHotels: [...action.payload], 
    }
  default:
    return state
  }


}