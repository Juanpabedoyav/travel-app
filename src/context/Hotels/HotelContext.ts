import { createContext } from "react"
import { Hotel, NewHotel } from "../../interfaces/hotels"

export interface HotelContextProps {
    hotels : Hotel[],
    newHotels: NewHotel[],
    dispatch:any  
    // searchHotels: (checkIn: string, checkOut: string, cityId: string) => Promise<void>
}

export const HotelContext = createContext({} as HotelContextProps)