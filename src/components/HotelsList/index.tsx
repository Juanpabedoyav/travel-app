import { useContext, useEffect, useState } from "react"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"
import { getIdLocation } from "../../api/getIdLocation"
import axios from "axios"
import { Hotel } from "../../interfaces/hotels"

export const HotelsList = () => {
  const {checkIn, checkOut, place} = useContext(UserSearchContext)
  const [infoId, setInfoId] = useState("")
  const [hotelsData, sethotelsData] = useState({})
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
        location_id:  "3000035821", //"3000035821",
      },
      headers: {
        "X-RapidAPI-Key": "5ec8346cb7msh68282be38a182bap1b201bjsnb5f02a71d620",
        "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
      }
    }
    try {
      axios.request(options).then((response) => 
        sethotelsData(response.data.hotels)
      )
    } catch{
      throw new Error("Error")
    }
   
  }

  useEffect(() => {
    generateIdLocation()
    setTimeout(() => {
      getHotels()
    }, 500)
    console.log(hotelsData)
  },[place])

  
  return(
    <>
            hola
    </>
  )

}