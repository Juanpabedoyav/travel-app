import { useParams } from "react-router-dom"
import { HotelContext } from "../../context/Hotels/HotelContext"
import { useContext } from "react"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"
import  { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FormReservationSc, InfoReservationSc, SectionHotelDetailsSc, SectionReservationSc } from "./styles"

export const HotelDetails = () => {
  const form = useRef<HTMLFormElement>(null)
  const { checkIn, checkOut}= useContext(UserSearchContext)
  const {id} =useParams()
  const {hotels} = useContext(HotelContext)
  const hotel = hotels.find(hotel => hotel.hotelId === id)


  const sendEmail = (e: any) => {
    e.preventDefault()
    if (form.current == null) return
    emailjs.sendForm("service_md9kwx4", "template_rb84xii", form.current, "WNebh56wZOcLPnknR")
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }


  return (
    <SectionHotelDetailsSc>
      <section className="hotel-details">
        <h1>{hotel?.name}</h1>
        <p>{hotel?.brand}</p>
        <div className="hotel-deails-reviews">
          <p>⭐{hotel?.starRating}</p>
          <p>{hotel?.totalReviewCount} Reviews</p>
        </div>
      </section>

      <section className="hotel-details-images">
        <img className= {"details-image"} src={hotel?.media.url} alt={hotel?.name} loading="lazy"/>
        <div className="hotel-details--othersimages">
          <img src={hotel?.media.url} alt={hotel?.name} loading="lazy"/>
          <img src={hotel?.media.url} alt={hotel?.name} loading="lazy"/>
          <img src={hotel?.media.url} alt={hotel?.name} loading="lazy"/>
          <img src={hotel?.media.url} alt={hotel?.name} loading="lazy"/>
        </div>
      </section>



      <SectionReservationSc >
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
          <label htmlFor="checkIn">check-In:</label>
          <input type="text" name="checkIn" id="checkIn"  defaultValue={checkIn}/>
          <label htmlFor="checkOut">check-Out: </label>
          <input type="text" name="checkOut" id="checkOut"  defaultValue={checkOut}/>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="to_name" id="to_name"  required/>
          </div>
          <div className="field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName"  required/>
          </div>
          <div className="field">
            <label htmlFor="birthdate">Birthdate:</label>
            <input type="date" name="birthdate" id="birthdate"  required/>
          </div>
          <div className="field">
            <label htmlFor="gender">gender</label>
            <input type="text" name="gender" id="gender"  required/>
          </div>
    
          <div className="field">
            <label htmlFor="documentType">Document Type</label>
            <input type="text" name="documentType" id="documentType" required />
          </div>
          <div className="field">
            <label htmlFor="documentNumber">Document ID:</label>
            <input type="number" name="documentNumber" id="documentNumber" required />
          </div>
          <div className="field">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email"  required/>
          </div>
       
          <div className="field">
            <label htmlFor="telephone">telephone</label>
            <input type="tel" name="telephone" id="telephone"  required/>
          </div>
          <div className="field">
            <label htmlFor="emergency">Emergency Contact</label>
            <input type="tel" name="emergency" id="emergency"  required/>
          </div>
          <div className="field">
            <label htmlFor="telephoneEmegergency">telephone</label>
            <input type="tel" name="telephoneEmegergency" id="telephoneEmegergency"  required/>
          </div>
          <button type="submit">reservar</button>
        </FormReservationSc>
      </SectionReservationSc>

    </SectionHotelDetailsSc>
  )
}
