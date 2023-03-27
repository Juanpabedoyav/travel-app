import { useEffect, useState } from "react"
import { ReservationUser } from "../../interfaces/users"
import { CardAdmindSc } from "../DashboardAdmin/styles"

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
    <>
      {
        hotelReservations.map((reservation) => (
          <CardAdmindSc key={reservation.documentNumber}>
            <h1>{reservation?.to_name}</h1>
            <p>{reservation?.lastName}</p>
            {/* <p>{reservation?.email}</p> */}
            {/* <p>{reservation.rooms}</p> */}
            <p>{reservation?.gender}</p>
            <p>{reservation?.documentType}</p>
            {/* <p>{reservation.documentId}</p> */}
          </CardAdmindSc>
        ))
      } 
    </>
  )
}
