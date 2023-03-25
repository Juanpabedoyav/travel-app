import { Hotel } from "../../interfaces/hotels"

type HotelAction = 
|{ type: "SET_HOTELS", payload: Hotel[] }


export const  HotelReducer = ( state:any, action: HotelAction) => {
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