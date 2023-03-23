import { createContext } from "react"
import { Hotel } from "../../interfaces/hotels"

export interface HotelContextProps {
    hotels : Hotel[]
}

export const HotelContext = createContext({} as HotelContextProps)