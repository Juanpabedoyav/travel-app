import { useContext, useEffect, useState } from "react"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"
import { getIdLocation } from "../../api/getIdLocation"

export const HotelsList = () => {
  const {checkIn, checkOut, place} = useContext(UserSearchContext)
  const [infoId, setInfoId] = useState("")
 
  const generateIdLocation =  () =>{ 
    if(place){
      getIdLocation(place).then( res =>{
        setInfoId(res)
      })  
      console.log(infoId)
    }
  }
 

  useEffect(() => {
    generateIdLocation()
  },[place])




 


  
  return(
    <>
            hola
    </>
  )

}