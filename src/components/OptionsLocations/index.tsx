import axios from "axios"
import { useEffect, useState } from "react"


    interface OptionsLocationsState {
        group: string,
        text: string,
        value: string
    } 

export const OptionsLocations = () => {

  const [location, setLocation] = useState([] as OptionsLocationsState[])
  //get all countries from API
  const getLocations = async () => {
    const res = await axios.get("https://trial.mobiscroll.com/content/countries.json")
    const data = await res.data
    setLocation(data)
  }
  // get all countries when component is mounted 
  useEffect(() => {
    getLocations()    
  }, [])
  
  return (
    <>
      {location.map((item) => (
        <option key={item.value}>{item.text}</option>
      ))} 
    </>
  )
}
