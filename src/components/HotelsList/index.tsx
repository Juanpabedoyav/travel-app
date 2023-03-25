import { useContext } from "react"
import { HotelContext } from "../../context/Hotels/HotelContext"
import { Link } from "react-router-dom"
import { CardSc, SectionHotelsSc } from "./styles"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"

export const HotelsList = () => {
  const {hotels} = useContext(HotelContext)
  const {place} = useContext(UserSearchContext)


  return(
    <>
      <h1>Hotel List {place}</h1>
      <SectionHotelsSc>
        {
          hotels?.slice(0,15).map((hotel) => (
            <a href={`/${hotel.hotelId}`} key={hotel.hotelId}>
              <CardSc >
                <h1>{hotel.name}</h1>
                <p>{hotel.brand}</p>
              </CardSc>
            </a>
          ))
        }
      </SectionHotelsSc>
    </>
  )

}