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
      "X-RapidAPI-Key": "3039ed9becmsh30b3d62963b1ff4p1a6367jsnfe145e558f5a",
      "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
    }
  }
  try{
    return  axios.request(options).then((response) => response.data)
  } catch{
    throw new Error("Error")
  }
}