import { useContext, useState } from "react"
import { CardAdmindSc, DashboardAdminSC, SectionAdminSc } from "./styles"
import { FieldsReservationSc, FormReservationSc, ReservationDatesSc, ReservationRoomSc } from "../HotelDetails/styles"
import { Modal } from "../Modal"
import { Link } from "react-router-dom"
import { HotelContext } from "../../context/Hotels/HotelContext"

export const DashboardAdmin = () => {
  const {dispatch} = useContext(HotelContext)
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState({})
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    console.log(input)
  }

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type: "SET_NEWHOTELS", payload: []})

  }

  return (
    <DashboardAdminSC>
      <div className="actions">    
        <h1>DashBoard Admin</h1>
        <button onClick={()=> setOpen(true)}>New Hotel</button>
        <Link to='resevations'>Reservations</Link>
      </div>
       
      <Modal open={open} close={() => setOpen(false)}>
        <FormReservationSc onSubmit={handlerSubmit}>
    
          <ReservationRoomSc>
            <label htmlFor="room">Rooms Available:</label>
            <select name="room" id="room" onChange={handlerChange}>
              <option value={1}>1 Room</option>
              <option value={2}>2 Rooms</option>
              <option value={3}>3+ Rooms</option>
            </select>
            <label htmlFor="room-type">Room Type:</label>
            <select name="room-type" id="room-type" onChange={handlerChange}>
              <option value={1}>Normal</option>
              <option value={2}>VIP</option>
              <option value={3}>VIP</option>
            </select>
            <label htmlFor="price">Price:</label>
            <input type="number" name="price" id="price"  required onChange={handlerChange}/>
          </ReservationRoomSc>

          <hr></hr>
          {/* field name - lastname*/}
          <FieldsReservationSc>
            <label htmlFor="id">Hotel ID:</label>
            <input type="number" name="id" id="id"  required onChange={handlerChange}/>
            <label htmlFor="name">Hotel Name:</label>
            <input type="text" name="name" id="name"  required  onChange={handlerChange}/>
          </FieldsReservationSc>
          <FieldsReservationSc>
            <label htmlFor="cost">Cost:</label>
            <input type="number" name="cost" id="cost"  required  onChange={handlerChange}/>
            <label htmlFor="tax">Tax:</label>
            <input type="number" name="tax" id="tax"  required  onChange={handlerChange}/>
          </FieldsReservationSc>
          <label htmlFor="img">Url Image:</label>
          <input type="url" name="img" id="img"  required onChange={handlerChange}/>
          <button type="submit">Create Hotel</button>
          <button onClick={()=>setOpen(false)}>Close</button>
        </FormReservationSc>
      </Modal>
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
