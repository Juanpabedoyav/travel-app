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
  const debounceRef = useRef<NodeJS.Timeout>()
  const {checkIn, checkOut, place} = useContext(UserSearchContext)
  

  const generateIdLocation =  () =>{ 
    if(place){
      getIdLocation(place).then( res =>{
        setInfoId(res)
      })  
      console.log(infoId)
    }
  }
 
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
        "X-RapidAPI-Key": "406193abdbmsh59142b9470cc9dfp17cbd4jsn3eb322f20af8",
        "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
      }
    }
    try {
      axios.request(options).then((response) => 
        dispatchHotels.dispatch({ type:"SET_HOTELS", payload: response.data.hotels})
      )
    } catch{
      throw new Error("Error")
    }
   
  }

  useEffect(() => {
    generateIdLocation()
    setTimeout(() => {
      getHotels()
    }, 200)
  },[place])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    if(debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setInput({
        ...input,
        [e.target.name] : e.target.value
      })
    },500)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    //dispatch action to save data in context
    dispatch({type: "NEW_SEARCH", payload: input})
  }
  return (
    <FormSC onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="place">Location</label>
        <InputSC  name={"place"}type="search" list="place" autoComplete="on" onChange={handleInput} />
        <datalist id="place">
          <OptionsLocations/>
        </datalist>
      </div>
      <div className="field">
        <label htmlFor="checkIn">Check In</label>
        <InputSC  id="checkIn" name={"checkIn"} type="date" onChange={handleInput} />
      </div>
      <div className="field">
        <label htmlFor="checkOut">Check Out</label>
        <InputSC id="checkOut" name={"checkOut"} type="date" onChange={handleInput}/>
      </div>
      <div className={"buttonSearch"}>
        <ButtonSearchSC>Search</ButtonSearchSC>
      </div>
    </FormSC>
  )
}
