import { HotelContext } from "./HotelContext"


interface HotelProviderProps {
    children: JSX.Element | JSX.Element[],
}

export const HotelProvider = ({children}:HotelProviderProps) => {
    
 
 
  return (
    <HotelContext.Provider value={""}>
      {children}
    </HotelContext.Provider>
  )
}
