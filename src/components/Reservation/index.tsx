import { useEffect, useState } from "react"
import { ReservationUser } from "../../interfaces/users"
import { CardAdmindSc, SectionAdminSc } from "../DashboardAdmin/styles"

export const Reservation = () => {

  const [hotelReservations, setHotelReservations] = useState([] as ReservationUser[])

  const getLocalStorage = () => {
    const data = localStorage.getItem("reservation")
    if(data) {
      const dataParse = JSON.parse(data)
      console.log(dataParse)
      setHotelReservations(dataParse)
      // dispatch({type: "SET_NEWHOTELS", payload: dataParse})
    }
  }

  useEffect(() => {
    getLocalStorage()
  }, [])



  return (
    <SectionAdminSc>
      <h1>Reservations</h1>
      {
        hotelReservations.map((reservation) => (
          <CardAdmindSc key={reservation.documentNumber}>
            <h1>Name: {reservation?.to_name}</h1>
            <p>Last Name:{reservation?.lastName}</p>
            <p>Email:{reservation?.email}</p>
            <p>Rooms:{reservation.rooms}</p>
            <p>Gender: {reservation?.gender}</p>
            <p>Document Type: {reservation?.documentType}</p>
            <p>Document Number: {reservation?.documentNumber}</p>
            <p>Emergency: {reservation?.emergency}</p>
            <p>Telephone Emergency: {reservation?.telephoneEmegergency}</p>
          </CardAdmindSc>
        ))
      } 
    </SectionAdminSc>
  )
}
