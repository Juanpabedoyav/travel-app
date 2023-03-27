import { useEffect, useState } from "react"
import { ReservationUser } from "../../interfaces/users"

export const Reservation = () => {

  const [hotelReservations, setHotelReservations] = useState([] as ReservationUser[])

  const getLocalStorage = () => {
    const reservations = JSON.parse(localStorage.getItem("reservation") || "[]")
    if (reservations) {
      setHotelReservations(reservations)
    } else {
      return []
    }
  }

  useEffect(() => {
    getLocalStorage()
  }, [])



  return (
    <>
      {/* { */}
      {/* hotelReservations && */}
      {/* // hotelReservations.map((reservation) => ( */}
      {/* <h1>{hotelReservations.name}</h1>
      <p>{hotelReservations.lastName}</p>
      <p>{hotelReservations.email}</p>
      <p>{hotelReservations.rooms}</p>
      <p>{hotelReservations.gender}</p>
      <p>{hotelReservations.documentType}</p>
      <p>{hotelReservations.documentId}</p> */}
      {/* // )) */}
      {/* } */}
    </>
  )
}
