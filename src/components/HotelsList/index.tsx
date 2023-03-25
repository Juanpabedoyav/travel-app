import { useContext } from "react"
import { HotelContext } from "../../context/Hotels/HotelContext"
import { Link } from "react-router-dom"
import { CardSc, SectionHotelsSc } from "./styles"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"

export const HotelsList = () => {
  const {hotels} = useContext(HotelContext)
  const {place} = useContext(UserSearchContext)


  return(
    <>
      <h1>Hotel List {place}</h1>
      <SectionHotelsSc>
        {
          hotels?.slice(0,16).map((hotel) => (
            <Link className="card-hotels" to={`/detail/${hotel.hotelId}`} key={hotel.hotelId}>
              <CardSc >
                <picture>
                  <img src={hotel.media.url} alt={hotel.name} loading="lazy" />
                </picture>
                <section>
                  <h1>{hotel.name}</h1>
                  <p>⭐{hotel.starRating}</p>
                </section>
                <p>{hotel.brand}</p>
                <p>{hotel.location.timeZone}</p>
                <p>{hotel.ratesSummary.minCurrencyCode} {hotel.ratesSummary.minPrice} - Per night</p>

              </CardSc>
            </Link>
          ))
        }
      </SectionHotelsSc>
    </>
  )

}