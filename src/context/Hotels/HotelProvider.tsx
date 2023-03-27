import { useReducer } from "react"
import { HotelContext } from "./HotelContext"
import { HotelReducer } from "./HotelReducer"
import { Hotel, NewHotel } from "../../interfaces/hotels"

interface HotelProviderProps {
    children: JSX.Element | JSX.Element[],
}

export interface HotelState {
  hotels: Hotel[],
  newHotels: NewHotel[],
} 
// initial state
const INITIAL_STATE: HotelState = {
  hotels: [],
  newHotels: [],
}


export const HotelProvider = ({children}:HotelProviderProps) => {
  const [state, dispatch] = useReducer( HotelReducer, INITIAL_STATE)

    
  return (
    <HotelContext.Provider value={{
      ...state,
      dispatch
    }
    }>
      {children}
    </HotelContext.Provider>
  )
}
