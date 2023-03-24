import { useContext } from "react"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"

export const HotelsList = () => {
  const {checkIn, checkOut, place} = useContext(UserSearchContext)

  return(
    <>
            hola
    </>
  )

}