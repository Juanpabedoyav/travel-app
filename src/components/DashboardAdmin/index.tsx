import { useContext, useEffect, useState } from "react"
import {  CardAdmindSc, DashboardAdminSC, FieldsCreateHotelActionsSc, FieldsCreateHotelSc, FormCreateHotelSc, SectionAdminSc } from "./styles"
import { ReservationRoomSc } from "../HotelDetails/styles"
import { Modal } from "../Modal"
import { Link, useParams } from "react-router-dom"
import { HotelContext } from "../../context/Hotels/HotelContext"
import { NewHotel } from "../../interfaces/hotels"
import { Reservation } from "../Reservation"

export const DashboardAdmin = () => {
  // destructure context
  const {dispatch} = useContext(HotelContext)
  // state modal  
  const [open, setOpen] = useState(false)
  // get id from url
  const {id} = useParams()
  // state input
  const [input, setInput] = useState([] as NewHotel[])
  // state new hotel
  const [newHotelDash, setNewHotelDash] = useState([] as NewHotel[])
  // handler change input
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }
  // handler submit
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type: "SET_NEWHOTELS", payload: [input]})
    localStorage.setItem("newHotel", JSON.stringify([input]))
  }

  const getLocalStorage = () => {
    const data = localStorage.getItem("newHotel")
    if(data) {
      const dataParse = JSON.parse(data)
      setNewHotelDash(dataParse)
      // dispatch({type: "SET_NEWHOTELS", payload: dataParse})
    }
  }

  const deleteHotel = (id: string) => {
    const data = localStorage.getItem("newHotel")
    if(data) {
      const dataParse = JSON.parse(data)
      const filter = dataParse.filter((item: NewHotel) => item.id !== id)
      localStorage.setItem("newHotel", JSON.stringify(filter))
      setNewHotelDash(filter)
    }
  }
  useEffect(() => {
    getLocalStorage()
  }, [localStorage.getItem("newHotel")])
  

  return (
    <DashboardAdminSC>
      <div className="actions">    
        <h1>DashBoard Admin</h1>
        <button onClick={()=> setOpen(true)}>New Hotel</button>
        {/* <Link to={`${window.location.host}/777`}>Hotel List</Link> */}
        <Link to='reservations'>Reservations</Link>
      
      </div>
      {/* modal */}
      <Modal open={open}>
        <FormCreateHotelSc onSubmit={handlerSubmit}>
          <FieldsCreateHotelSc>
            <label htmlFor="room">Rooms Available:</label>
            <select name="room" id="room" onChange={handlerChange}>
              <option value={1}>1 Room</option>
              <option value={2}>2 Rooms</option>
              <option value={3}>3+ Rooms</option>
            </select>
            <label htmlFor="roomType">Room Type:</label>
            <select name="roomType" id="roomType" onChange={handlerChange}>
              <option value={"Normal"}>Normal</option>
              <option value={"VIP"}>VIP</option>
              <option value={"VIP"}>VIP</option>
            </select>
          </FieldsCreateHotelSc>
          <FieldsCreateHotelSc>
            <label htmlFor="price">Price:</label>
            <input type="number" name="price" id="price"  required onChange={handlerChange}/>
          </FieldsCreateHotelSc>
          <hr></hr>
          {/* field name - lastname*/}
          <FieldsCreateHotelSc>
            <label htmlFor="id">Hotel ID:</label>
            <input type="number" name="id" id="id"  required onChange={handlerChange}/>
            <label htmlFor="name">Hotel Name:</label>
            <input type="text" name="name" id="name"  required  onChange={handlerChange}/>
          </FieldsCreateHotelSc>
          <FieldsCreateHotelSc>
            <label htmlFor="cost">Cost:</label>
            <input type="number" name="cost" id="cost"  required  onChange={handlerChange}/>
            <label htmlFor="tax">Tax:</label>
            <input type="number" name="tax" id="tax"  required  onChange={handlerChange}/>
          </FieldsCreateHotelSc>
          <FieldsCreateHotelSc>
            <label htmlFor="img">Url Image:</label>
            <input type="url" name="img" id="img"  required onChange={handlerChange}/>
          </FieldsCreateHotelSc>
          <FieldsCreateHotelActionsSc>
            <button type="submit">Create Hotel</button>
            <button onClick={()=>setOpen(false)}>Close</button>
          </FieldsCreateHotelActionsSc>
        </FormCreateHotelSc>
      </Modal>
      

      { id === "reservations" ?
        <Reservation/>      
        :
        
        <SectionAdminSc>
          <h1>New Hotels</h1>
          {
            newHotelDash?.map((hotel) =>(
              <CardAdmindSc key={hotel.id}>
                <picture>
                  <img src={hotel.img} alt={hotel.name} loading="lazy" />
                </picture>
                <section className="card-title">
                  <h1>{hotel.name}</h1>
                </section>
                <section className="card-details">
                  <p>{hotel.price}</p>
                  <p>{hotel.room} to {hotel.roomType}</p>
                  <p>Cost Base: {hotel.cost}  Tax: {hotel.tax}</p>
                </section>
                <button onClick={()=>deleteHotel(hotel.id)}>Deshabilitar</button>
              </CardAdmindSc>
            ))
            
          }
        </SectionAdminSc>
      }
    </DashboardAdminSC>
  )
}
