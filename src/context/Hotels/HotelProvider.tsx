import { HotelContext } from "./HotelContext"

interface HotelProviderProps {
    children: JSX.Element | JSX.Element[],
}

const INITIAL_STATE = {
  hotels: [],
}


export const HotelProvider = ({children}:HotelProviderProps) => {

    
  return (
    <HotelContext.Provider value={INITIAL_STATE}>
      {children}
    </HotelContext.Provider>
  )
}
