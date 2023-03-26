import { useState } from "react"
import { CreateHotel } from "../CreateHotel"
import { CardSc, SectionHotelsSc } from "../HotelsList/styles"
import { CardAdmindSc, DashboardAdminSC, SectionAdminSc } from "./styles"
import { FieldsReservationSc, FormReservationSc, ReservationDatesSc, ReservationRoomSc } from "../HotelDetails/styles"

export const DashboardAdmin = () => {
  const [open, setOpen] = useState(false)

  return (
    <DashboardAdminSC>
      <div className="actions">    
        <h1>DashBoard Admin</h1>
        <button onClick={()=> setOpen(true)}>New Hotel</button>
        <CreateHotel open={open} close={() => setOpen(false)}>
          <FormReservationSc>
            {/* Reservation dates */}
            <ReservationDatesSc>
              {/* checkIn */}
              <div className="reservations-dates--checkIn">
                <label  className="checkIn" htmlFor="checkIn">check-In:</label>
              </div>
              {/* checkOut */}
              <div className="reservations-dates--checkOut">
                <label  className="checkOut" htmlFor="checkOut">check-Out: </label>
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
              <input type="text" name="to_name" id="to_name"  required/>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" name="lastName" id="lastName"  required/>
            </FieldsReservationSc>
            {/* field  birthdate - gender*/}
            <FieldsReservationSc>
              <label htmlFor="birthdate">Birthdate:</label>
              <input type="date" name="birthdate" id="birthdate"  required/>
              <label htmlFor="gender">Gender:</label>
              <select name="gender" id="gender">
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </FieldsReservationSc>
            {/* field  documentType - documentNumber*/}
            <FieldsReservationSc>
              <label htmlFor="documentType">Document Type:</label>
              <input type="text" name="documentType" id="documentType" required />
              <label htmlFor="documentNumber">Document ID:</label>
              <input type="number" name="documentNumber" id="documentNumber" required />
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
              <input type="tel" name="emergency" id="emergency"  required/>
              <label htmlFor="telephoneEmegergency">Telephone:</label>
              <input type="tel" name="telephoneEmegergency" id="telephoneEmegergency"  pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
            </FieldsReservationSc>
            <button type="submit">Create Hotel</button>
            <button onClick={()=>setOpen(false)}>Close</button>


          </FormReservationSc>
        </CreateHotel>
      </div>
      <SectionAdminSc>
        <CardAdmindSc>
          <picture>
            <img src={"hotel.media?.url"} alt={"hotel.name"} loading="lazy" />
          </picture>
          <section className="card-title">
            <h1>{"hotel.name"}</h1>
            <p>⭐{"hotel.starRating"}</p>
          </section>
          <section className="card-details">
            <p>{"hotel.brand"}</p>
            <p>{"checkIn"} to {"checkOut"}</p>
            <p>{"hotel.ratesSummary.minCurrencyCode"} {"hotel.ratesSummary.minPrice"} - Per night</p>
          </section>
          <button>Update</button>
          <button>Delete</button>
        </CardAdmindSc>
        <CardAdmindSc>
          <picture>
            <img src={"hotel.media?.url"} alt={"hotel.name"} loading="lazy" />
          </picture>
          <section className="card-title">
            <h1>{"hotel.name"}</h1>
            <p>⭐{"hotel.starRating"}</p>
          </section>
          <section className="card-details">
            <p>{"hotel.brand"}</p>
            <p>{"checkIn"} to {"checkOut"}</p>
            <p>{"hotel.ratesSummary.minCurrencyCode"} {"hotel.ratesSummary.minPrice"} - Per night</p>
          </section>
          <button>Update</button>
          <button>Delete</button>
        </CardAdmindSc>
        <CardAdmindSc>
          <picture>
            <img src={"hotel.media?.url"} alt={"hotel.name"} loading="lazy" />
          </picture>
          <section className="card-title">
            <h1>{"hotel.name"}</h1>
            <p>⭐{"hotel.starRating"}</p>
          </section>
          <section className="card-details">
            <p>{"hotel.brand"}</p>
            <p>{"checkIn"} to {"checkOut"}</p>
            <p>{"hotel.ratesSummary.minCurrencyCode"} {"hotel.ratesSummary.minPrice"} - Per night</p>
          </section>
          <button>Update</button>
          <button>Delete</button>
        </CardAdmindSc>
        <CardAdmindSc>
          <picture>
            <img src={"hotel.media?.url"} alt={"hotel.name"} loading="lazy" />
          </picture>
          <section className="card-title">
            <h1>{"hotel.name"}</h1>
            <p>⭐{"hotel.starRating"}</p>
          </section>
          <section className="card-details">
            <p>{"hotel.brand"}</p>
            <p>{"checkIn"} to {"checkOut"}</p>
            <p>{"hotel.ratesSummary.minCurrencyCode"} {"hotel.ratesSummary.minPrice"} - Per night</p>
          </section>
          <button>Update</button>
          <button>Delete</button>
        </CardAdmindSc>
        <CardAdmindSc>
          <picture>
            <img src={"hotel.media?.url"} alt={"hotel.name"} loading="lazy" />
          </picture>
          <section className="card-title">
            <h1>{"hotel.name"}</h1>
            <p>⭐{"hotel.starRating"}</p>
          </section>
          <section className="card-details">
            <p>{"hotel.brand"}</p>
            <p>{"checkIn"} to {"checkOut"}</p>
            <p>{"hotel.ratesSummary.minCurrencyCode"} {"hotel.ratesSummary.minPrice"} - Per night</p>
          </section>
          <button>Update</button>
          <button>Delete</button>
        </CardAdmindSc>
      </SectionAdminSc>

    </DashboardAdminSC>
  )
}
