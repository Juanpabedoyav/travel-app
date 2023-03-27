import { useParams } from "react-router-dom"
import { HotelContext } from "../../context/Hotels/HotelContext"
import { useContext, useEffect, useState } from "react"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"
import  { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FieldsReservationSc, FormReservationSc, InfoReservationSc, ReservationDatesSc, ReservationRoomSc, SectionHotelDetailsSc, SectionReservationSc } from "./styles"

export const HotelDetails = () => {
  
  // Context
  const {hotels} = useContext(HotelContext)
  const { checkIn, checkOut, dispatch}= useContext(UserSearchContext)
  
  // States
  const [input, setInput] = useState({})

  //  Refs
  const form = useRef<HTMLFormElement>(null)
  const {id} = useParams()
  const hotel = hotels.find(hotel => hotel.hotelId === id)
  
  // Local Storage
  const localStorageHotel = JSON.parse(localStorage.getItem("selectedHotel") || "{}")

  // Handler Input
  const handleInput = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }
  // Send Email 
  const sendEmail = (e: any) => {
    e.preventDefault()
    if (form.current == null) return
    emailjs.sendForm("service_md9kwx4", "template_rb84xii", form.current, "WNebh56wZOcLPnknR")
      .then((result) => {
        localStorage.setItem("reservation", JSON.stringify(input))
        dispatch({type: "NEW_RESERVATION", payload: {reservation: input}})
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }
  // set local storage when hotel is selected
  useEffect(() => {
    hotel && localStorage.setItem("selectedHotel", JSON.stringify(hotel))
  }, [hotel])
  

  return (
    <SectionHotelDetailsSc>
      <section className="hotel-details">
        <h1>{localStorageHotel?.name}</h1>
        <p>{localStorageHotel?.brand}</p>
        <div className="hotel-deails-reviews">
          <p>⭐{localStorageHotel?.starRating}</p>
          <p>{localStorageHotel?.totalReviewCount} Reviews</p>
        </div>
      </section>
      <section className="hotel-details-images">
        <img className= {"details-image"} src={localStorageHotel?.media.url} alt={localStorageHotel?.name} loading="lazy"/>
        <div className="hotel-details--othersimages">
          <img src={localStorageHotel?.media.url} alt={hotel?.name} loading="lazy"/>
          <img src={localStorageHotel?.media.url} alt={localStorageHotel?.name} loading="lazy"/>
          <img src={localStorageHotel?.media.url} alt={localStorageHotel?.name} loading="lazy"/>
          <img src={localStorageHotel?.media.url} alt={localStorageHotel?.name} loading="lazy"/>
        </div>
      </section>
      <SectionReservationSc >
        {/* Perks reservation */}
        <InfoReservationSc >
          <h2>Reservation</h2>
          <h1>{hotel?.name}</h1>
          <hr></hr>
          <ul  className="info-reservation">
            <li>🧑‍⚕️ Work area</li>
            <li>🛬 Autonomous arrival</li>
            <li>🔑 Make your arrival easy by using the key safe.</li>
            <li>📆 Free cancellation before {checkIn}</li>
          </ul>
          <hr></hr>
          <h2>Hotel Features</h2>
          <ul  className="hotel-features">
            <li>🛬 Autonomous arrival</li>
            <li>🔑 Make your arrival easy by using the key safe.</li>
            <li>📆 Free cancellation before {checkIn}</li>
          </ul>
          
        </InfoReservationSc>
        <FormReservationSc ref={form} onSubmit={sendEmail}>
          {/* Reservation dates */}
          <ReservationDatesSc>
            {/* checkIn */}
            <div className="reservations-dates--checkIn">
              <label  className="checkIn" htmlFor="checkIn">check-In:</label>
              <input type="text" name="checkIn" id="checkIn"  defaultValue={checkIn} disabled/>
            </div>
            {/* checkOut */}
            <div className="reservations-dates--checkOut">
              <label  className="checkOut" htmlFor="checkOut">check-Out: </label>
              <input type="text" name="checkOut" id="checkOut"  defaultValue={checkOut} disabled/>
            </div>
          </ReservationDatesSc>
          {/* Reservation Rooms */}
          <ReservationRoomSc>
            <select name="room" id="room">
              <option value={1}>1 Room</option>
              <option value={2}>2 Rooms</option>
              <option value={3}>3+ Rooms</option>
            </select>
          </ReservationRoomSc>

          <hr></hr>
          {/* field name - lastname*/}
          <FieldsReservationSc>
            <label htmlFor="name">Name:</label>
            <input type="text" name="to_name" id="to_name"  required onChange={handleInput}/>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName"  required onChange={handleInput}/>
          </FieldsReservationSc>
          {/* field  birthdate - gender*/}
          <FieldsReservationSc>
            <label htmlFor="birthdate">Birthdate:</label>
            <input type="date" name="birthdate" id="birthdate"  required onChange={handleInput}/>
            <label htmlFor="gender">Gender:</label>
            <select name="gender" id="gender" onChange={handleInput}>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </FieldsReservationSc>
          {/* field  documentType - documentNumber*/}
          <FieldsReservationSc>
            <label htmlFor="documentType">Document Type:</label>
            <input type="text" name="documentType" id="documentType" required  onChange={handleInput}/>
            <label htmlFor="documentNumber">Document ID:</label>
            <input type="number" name="documentNumber" id="documentNumber" required onChange={handleInput}/>
          </FieldsReservationSc>
          {/* field  email - telephone*/}
          <FieldsReservationSc>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email"  required/>
            <label htmlFor="telephone">Telephone:</label>
            <input type="tel" name="telephone" id="telephone"  pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
          </FieldsReservationSc>
          <hr></hr>
          <h1>Emergency Contact</h1>
          {/* field  emergency - telephoneEmegergency*/}
          <FieldsReservationSc>
            <label htmlFor="emergency">Emergency Contact</label>
            <input type="tel" name="emergency" id="emergency"  required onChange={handleInput}/>
            <label htmlFor="telephoneEmegergency">Telephone:</label>
            <input type="tel" name="telephoneEmegergency" id="telephoneEmegergency"  pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required onChange={handleInput}/>
          </FieldsReservationSc>
          <button type="submit">reservar</button>

        </FormReservationSc>
      </SectionReservationSc>

    </SectionHotelDetailsSc>
  )
}
