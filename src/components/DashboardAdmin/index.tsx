import { useState } from "react"
import { CardAdmindSc, DashboardAdminSC, SectionAdminSc } from "./styles"
import { FieldsReservationSc, FormReservationSc, ReservationDatesSc, ReservationRoomSc } from "../HotelDetails/styles"
import { Modal } from "../Modal"

export const DashboardAdmin = () => {
  const [open, setOpen] = useState(false)

  return (
    <DashboardAdminSC>
      <div className="actions">    
        <h1>DashBoard Admin</h1>
        <button onClick={()=> setOpen(true)}>New Hotel</button>
        <Modal open={open} close={() => setOpen(false)}>
          <FormReservationSc>
    
            <ReservationRoomSc>
              <label htmlFor="room">Rooms Available:</label>
              <select name="room" id="room">
                <option value={1}>1 Room</option>
                <option value={2}>2 Rooms</option>
                <option value={3}>3+ Rooms</option>
              </select>
              <label htmlFor="room-type">Room Type:</label>
              <select name="room-type" id="room-type" >
                <option value={1}>Normal</option>
                <option value={2}>VIP</option>
                <option value={3}>VIP</option>
              </select>
              <label htmlFor="price">Price:</label>
              <input type="text" name="price" id="price"  required/>
            </ReservationRoomSc>

            <hr></hr>
            {/* field name - lastname*/}
            <FieldsReservationSc>
              <label htmlFor="id">Hotel ID:</label>
              <input type="text" name="id" id="id"  required/>
              <label htmlFor="name">Hotel Name:</label>
              <input type="text" name="to_name" id="to_name"  required/>
            </FieldsReservationSc>
            <FieldsReservationSc>
              <label htmlFor="cost">Cost:</label>
              <input type="text" name="cost" id="cost"  required/>
              <label htmlFor="tax">Tax:</label>
              <input type="text" name="tax" id="tax"  required/>
            </FieldsReservationSc>
            <button type="submit">Create Hotel</button>
            <button onClick={()=>setOpen(false)}>Close</button>
          </FormReservationSc>
        </Modal>
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
          <button>Deshabilitar</button>

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
