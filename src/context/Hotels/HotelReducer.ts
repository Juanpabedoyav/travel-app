import { Hotel } from "../../interfaces/hotels"
import { HotelState } from "./HotelProvider"

type HotelAction = 
|{ type: "SET_HOTELS", payload: Hotel[] }


export const  HotelReducer = ( state:HotelState, action: HotelAction): HotelState => {
  switch (action.type) {
  case "SET_HOTELS" :
    return{
      ...state,
      hotels: action.payload
    }

  default:
    return state
  }


}