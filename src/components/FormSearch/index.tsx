import {  useContext, useEffect, useRef, useState } from "react"
import { ButtonSearchSC, FormSC, InputSC } from "./styles"
import { UserSearchState } from "../../context/UserSearch/UserSearchProvider"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"
import { OptionsLocations } from "../OptionsLocations"
import { getIdLocation } from "../../api/getIdLocation"
import { HotelContext } from "../../context/Hotels/HotelContext"
import axios from "axios"
export const FormSearch = () => {
  //get dispatch from context
  const {dispatch} = useContext(UserSearchContext)
  const dispatchHotels = useContext(HotelContext)
  // id location
  const [infoId, setInfoId] = useState("")  
  // set state for input
  const [input, setInput] = useState<UserSearchState>()
  // handler change input with debounce
  const debounceRef = useRef<NodeJS.Timeout>()
  // destructure context
  const {checkIn, checkOut, place} = useContext(UserSearchContext)
  
  // generate id location
  const generateIdLocation =  () =>{ 
    if(place){
      getIdLocation(place).then( res =>{
        setInfoId(res)
      })  
      console.log(infoId)
    }
  }
  // get hotels from api
  const getHotels = async () => {
    const options = {
      method: "GET",
      url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/search",
      params: {
        date_checkout: checkOut,//"2023-07-23",
        sort_order: "HDR",
        date_checkin: checkIn, //"2023-07-22",
        location_id:  infoId, //"3000035821",
        page_number: "1",
      },
      headers: {
        "X-RapidAPI-Key": "4051a72e8fmsh1de75d6aaaafc71p10aa9ejsn3e8d497e9a1d",
        "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
      }
    }
    try {
      if(infoId && checkIn && checkOut){
        axios.request(options).then((response) => 
          dispatchHotels.dispatch({ type:"SET_HOTELS", payload: response.data.hotels})
        )
      }
    } catch{
      throw new Error("Error")
    }
   
  }
  // get hotels when change inputs
  useEffect(() => {
    generateIdLocation()
    setTimeout(() => {
      getHotels()
    },)
  },[place, checkIn, checkOut])
  // handler change input with debounce
  const handleInput = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    if(debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setInput({
        ...input,
        [e.target.name] : e.target.value
      })
    },500)
  }
  // handler submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    //dispatch action to save data in context
    dispatch({type: "NEW_SEARCH", payload: input})
  }
  return (
    <FormSC onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="place">Location</label>
        <InputSC  name={"place"}type="search" list="place" autoComplete="on" onChange={handleInput} placeholder="United States" required/>
        <datalist id="place">
          <OptionsLocations/>
        </datalist>
      </div>
      <div className="field">
        <label htmlFor="checkIn">Check In</label>
        <InputSC  id="checkIn" name={"checkIn"} type="date" onChange={handleInput} required/>
      </div>
      <div className="field">
        <label htmlFor="checkOut">Check Out</label>
        <InputSC id="checkOut" name={"checkOut"} type="date" onChange={handleInput} required/>
      </div>
      <div className={"buttonSearch"}>
        <ButtonSearchSC>Search</ButtonSearchSC>
      </div>
    </FormSC>
  )
}
