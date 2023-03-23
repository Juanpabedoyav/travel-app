import { useEffect, useState } from "react"
import { HotelContext, HotelContextProps } from "./HotelContext"
import { searchHotels } from "../../api/searchHotels"

interface HotelProviderProps {
    children: JSX.Element | JSX.Element[],
}




export const HotelProvider = ({children}:HotelProviderProps) => {
  const [dataHotels, setDataHotels] = useState({} as HotelContextProps)     
  
  
  
  useEffect(() => {
    searchHotels("2023-07-22", "2023-07-23", "3000035821").then( response => setDataHotels(response.data.hotels))
  }, [])
    
 
 
  return (
    <HotelContext.Provider value={dataHotels}>
      {children}
    </HotelContext.Provider>
  )
}
