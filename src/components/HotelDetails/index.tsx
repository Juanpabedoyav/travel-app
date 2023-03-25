import { useParams } from "react-router-dom"
import { HotelContext } from "../../context/Hotels/HotelContext"
import { useContext } from "react"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"

export const HotelDetails = () => {
  const { checkIn, checkOut}= useContext(UserSearchContext)
  const {id} =useParams()
  const {hotels} = useContext(HotelContext)
  const hotel = hotels.find(hotel => hotel.hotelId === id)
  console.log(hotel, id)
  return (
    <div style={{display:"flex", flexDirection: "column"}}>
      <section>
        
        <h1>{hotel?.name}</h1>
        <p>{hotel?.brand}</p>
      </section>
      <section >
        <form >
          <p>{checkIn}</p>
          <p>{checkOut}</p>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"  />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName"  />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input type="text" name="date" id="date"  />
          </div>
          <div>
            <label htmlFor="gender">gender</label>
            <input type="text" name="gender" id="gender"  />
          </div>
    
          <div>
            <label htmlFor="documentType">Document Type</label>
            <input type="text" name="documentType" id="documentType"  />
          </div>
          <div>
            <label htmlFor="documentNumber">Document ID:</label>
            <input type="text" name="documentNumber" id="documentNumber"  />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email"  />
          </div>
       
          <div>
            <label htmlFor="telephone">telephone</label>
            <input type="text" name="telephone" id="telephone"  />
          </div>

          <button type="submit">reservar</button>
        </form>
      </section>

    </div>
  )
}
