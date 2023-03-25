import { useParams } from "react-router-dom"
import { HotelContext } from "../../context/Hotels/HotelContext"
import { useContext } from "react"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"
import  { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FormReservationSc, SectionReservationSc } from "./styles"

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
    <div style={{display:"flex", flexDirection: "column"}}>
      <section>
    
        <h1>{hotel?.name}</h1>
        <p>{hotel?.brand}</p>
      </section>
      <SectionReservationSc >
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

    </div>
  )
}
