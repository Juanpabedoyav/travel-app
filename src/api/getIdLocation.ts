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
      "X-RapidAPI-Key": "5ec8346cb7msh68282be38a182bap1b201bjsnb5f02a71d620",
      "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
    }
  }
  try{
    return  axios.request(options).then((response) => response.data[0].id)
  } catch{
    throw new Error("Error")
  }
}