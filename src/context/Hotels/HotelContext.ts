import { createContext } from "react"
import { Hotel } from "../../interfaces/hotels"

export interface HotelContextProps {
    hotels : Hotel[]
    searchHotels: (checkIn: string, checkOut: string, cityId: string) => Promise<void>
}

export const HotelContext = createContext({} as HotelContextProps)