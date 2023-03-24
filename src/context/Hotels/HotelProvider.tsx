import { useContext,  useEffect, useState } from "react"
import { HotelContext } from "./HotelContext"
import { UserSearchContext } from "../UserSearch/UserSearchContext"

interface HotelProviderProps {
    children: JSX.Element | JSX.Element[],
}

const INITIAL_STATE = {
  hotels: [],
  searchHotels: (checkIn: string, checkOut: string, cityId: string) => Promise.resolve(),
}


export const HotelProvider = ({children}:HotelProviderProps) => {
  // useEffect(() => {
    
  // searchHotels("2023-07-22", "2023-07-23", "3000035821").then( response => setDataHotels(response.data.hotels))
  // }, [])
    
  return (
    <HotelContext.Provider value={INITIAL_STATE}>
      {children}
    </HotelContext.Provider>
  )
}
