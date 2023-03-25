import { useReducer } from "react"
import { HotelContext } from "./HotelContext"
import { HotelReducer } from "./HotelReducer"
import { Hotel } from "../../interfaces/hotels"

interface HotelProviderProps {
    children: JSX.Element | JSX.Element[],
}

export interface HotelState {
  hotels: Hotel[],
} 
const INITIAL_STATE: HotelState = {
  hotels: [],
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
