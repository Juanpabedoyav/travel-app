import axios from "axios"

export const searchHotels =axios.create({
  baseURL: "https://hotels-com-provider.p.rapidapi.com/v2/hotels/search",
  headers: {
    "X-RapidAPI-Key": "3039ed9becmsh30b3d62963b1ff4p1a6367jsnfe145e558f5a",
    "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com"
  },
  params: {
    sort_order: "PROXIMITY",
  }
})
// const options = {
//   method: "GET",
//   url: "https://hotels-com-provider.p.rapidapi.com/v2/hotels/search",
//   params: {
//     domain: "AE",
//     sort_order: "REVIEW",
//     locale: "en_GB",
//     checkout_date: "2023-09-27",
//     region_id: "2872",
//     adults_number: "1",
//     checkin_date: "2023-09-26",
//     available_filter: "SHOW_AVAILABLE_ONLY",
//     meal_plan: "FREE_BREAKFAST",
//     guest_rating_min: "8",
//     price_min: "10",
//     page_number: "1",
//     children_ages: "4,0,15",
//     amenities: "WIFI,PARKING",
//     price_max: "500",
//     lodging_type: "HOTEL,HOSTEL,APART_HOTEL",
//     payment_type: "PAY_LATER,FREE_CANCELLATION",
//     star_rating_ids: "3,4,5"
//   },
//   headers: {
//     "X-RapidAPI-Key": "3039ed9becmsh30b3d62963b1ff4p1a6367jsnfe145e558f5a",
//     "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com"
//   }
// }

// axios.request(options).then(function (response) {
//   console.log(response.data)
// }).catch(function (error) {
//   console.error(error)
// })