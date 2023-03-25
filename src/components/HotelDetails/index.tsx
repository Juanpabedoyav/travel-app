import { useParams } from "react-router-dom"
import { HotelContext } from "../../context/Hotels/HotelContext"
import { useContext } from "react"
import { FormSearch } from "../FormSearch"

export const HotelDetails = () => {
  const {id} =useParams()
  const {hotels} = useContext(HotelContext)
  const hotel = hotels.find(hotel => hotel.hotelId === id)
  console.log(hotel, id)
  return (
    <div>
        hola
    </div>
  )
}
