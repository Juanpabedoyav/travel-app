import { useState } from "react"
import { Hotel } from "../interfaces/hotels"


export interface hotelsAdvertisingState {
  isOpen: boolean,
    hotels: Hotel[],

}
const INITIAL_STATE: hotelsAdvertisingState = {
  isOpen: false,
  hotels: []
}

const hotelsAdvertising = () => {
  const [state, setState] = useState(INITIAL_STATE)
    
  const addHotel = (payload: Hotel) =>{
    setState({
      ...state,
      hotels: state.hotels.includes(payload) ? state.hotels : [...state.hotels, payload]
    })
  }
  const deleteHotel = (payload: Hotel) =>{
    setState({
      ...state,
      hotels: state.hotels.filter(( items => items.hotelId !== payload.hotelId)) 
    })
  }
    
  const toogleButton = () =>{
    setState({
      ...state,
      isOpen: !state.isOpen,
    })
    
  }
    
  return{
    state,
    addHotel,
    deleteHotel,
    toogleButton
  }
    
}
    
export default hotelsAdvertising