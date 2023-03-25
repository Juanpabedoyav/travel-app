import axios from "axios"

export const getIdLocation = (place?: string) =>{
  const options = {
    method: "GET",
    url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations",
    params: {
      name: place,
      search_type: "HOTEL"
    },
    headers: {
      "X-RapidAPI-Key": "406193abdbmsh59142b9470cc9dfp17cbd4jsn3eb322f20af8",
      "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
    }
  }
  try{
    return  axios.request(options).then((response) => response.data[0].id)
  } catch{
    throw new Error("Error")
  }
}