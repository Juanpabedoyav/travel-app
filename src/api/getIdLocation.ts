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
      "X-RapidAPI-Key": "4051a72e8fmsh1de75d6aaaafc71p10aa9ejsn3e8d497e9a1d",
      "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
    }
  }
  try{
    return  axios.request(options).then((response) => response.data[0].id)
  } catch{
    throw new Error("Error")
  }
}