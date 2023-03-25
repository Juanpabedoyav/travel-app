import { useContext } from "react"
import { HotelContext } from "../../context/Hotels/HotelContext"
import { Link } from "react-router-dom"
import { CardSc, SectionHotelsSc, TitleHotelsListSc } from "./styles"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"

export const HotelsList = () => {
  const {hotels} = useContext(HotelContext)
  const {place, checkIn, checkOut} = useContext(UserSearchContext)

  if(hotels?.length === 0) return <h1></h1>
  if(hotels  === null) return <h1>Dont have Hotels...</h1>
   
  return(
    <>
      { 
    
        <>
          <TitleHotelsListSc>Hotel List {place}</TitleHotelsListSc>
          <SectionHotelsSc>
            {
              hotels?.slice(0,18).map((hotel) => (
                <Link className="card-hotels" to={`/detail/${hotel.hotelId}`} key={hotel.hotelId}>
                  <CardSc >
                    <picture>
                      <img src={hotel.media.url} alt={hotel.name} loading="lazy" />
                    </picture>
                    <section className="card-title">
                      <h1>{hotel.name}</h1>
                      <p>⭐{hotel.starRating}</p>
                    </section>
                    <section className="card-details">
                      <p>{hotel.brand}</p>
                      <p>{checkIn} to {checkOut}</p>
                      <p>{hotel.ratesSummary.minCurrencyCode} {hotel.ratesSummary.minPrice} - Per night</p>
                    </section>
                  </CardSc>
                </Link>
              ))
            }
          </SectionHotelsSc>
        </>
      }
    </>
    

  )

}