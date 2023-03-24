import axios from "axios"

export const searchHotels = (date_checkin: string ,date_checkout: string, location_id: string) =>{
  const options = {
    method: "GET",
    url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/search",
    params: {
      date_checkout: date_checkout,//"2023-07-23",
      sort_order: "HDR",
      date_checkin: date_checkin, //"2023-07-22",
      location_id:  location_id, //"3000035821",
    },
    headers: {
      "X-RapidAPI-Key": "3039ed9becmsh30b3d62963b1ff4p1a6367jsnfe145e558f5a",
      "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
    }
  }
  return axios.request(options)
}