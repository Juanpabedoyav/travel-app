import { useContext } from "react"
import { HotelContext } from "../../context/Hotels/HotelContext"
import { Link } from "react-router-dom"

export const HotelsList = () => {
  const {hotels} = useContext(HotelContext)
  // const {checkIn, checkOut, place} = useContext(UserSearchContext)

  // const [infoId, setInfoId] = useState("")
  // const generateIdLocation =  () =>{ 
  //   if(place){
  //     getIdLocation(place).then( res =>{
  //       setInfoId(res)
  //     })  
  //     console.log(infoId)
  //   }
  // }
 
  // const getHotels = async () => {
  //   const options = {
  //     method: "GET",
  //     url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/search",
  //     params: {
  //       date_checkout: checkOut,//"2023-07-23",
  //       sort_order: "HDR",
  //       date_checkin: checkIn, //"2023-07-22",
  //       location_id:  infoId, //"3000035821",
  //       page_number: "1",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "406193abdbmsh59142b9470cc9dfp17cbd4jsn3eb322f20af8",
  //       "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
  //     }
  //   }
  //   try {
  //     axios.request(options).then((response) => 
  //       dispatch({ type:"SET_HOTELS", payload: response.data.hotels})
  //     )
  //   } catch{
  //     throw new Error("Error")
  //   }
   
  // }

  // useEffect(() => {
  //   generateIdLocation()
  //   setTimeout(() => {
  //     getHotels()
  //   }, 500)
  // },[place])

  
  return(
    <>
      {
        hotels?.slice(0,15).map((hotel) => (
          <article className="card" key={hotel.hotelId}>
            <a href={`/${hotel.hotelId}`} >
              <h1>{hotel.name}</h1>
              <p>{hotel.brand}</p>
            </a>
          </article>
        ))
      }
    </>
  )

}