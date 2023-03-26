import { CardSc, SectionHotelsSc } from "../HotelsList/styles"
import { CardAdmindSc, DashboardAdminSC, SectionAdminSc } from "./styles"

export const DashboardAdmin = () => {
  return (
    <DashboardAdminSC>
      <div className="actions">    
        <h1>DashBoard Admin</h1>
        <button>New Hotel</button>
      </div>
      <SectionAdminSc>
        <CardAdmindSc>
          <picture>
            <img src={"hotel.media?.url"} alt={"hotel.name"} loading="lazy" />
          </picture>
          <section className="card-title">
            <h1>{"hotel.name"}</h1>
            <p>⭐{"hotel.starRating"}</p>
          </section>
          <section className="card-details">
            <p>{"hotel.brand"}</p>
            <p>{"checkIn"} to {"checkOut"}</p>
            <p>{"hotel.ratesSummary.minCurrencyCode"} {"hotel.ratesSummary.minPrice"} - Per night</p>
          </section>
          <button>Update</button>
          <button>Delete</button>
        </CardAdmindSc>
        <CardAdmindSc>
          <picture>
            <img src={"hotel.media?.url"} alt={"hotel.name"} loading="lazy" />
          </picture>
          <section className="card-title">
            <h1>{"hotel.name"}</h1>
            <p>⭐{"hotel.starRating"}</p>
          </section>
          <section className="card-details">
            <p>{"hotel.brand"}</p>
            <p>{"checkIn"} to {"checkOut"}</p>
            <p>{"hotel.ratesSummary.minCurrencyCode"} {"hotel.ratesSummary.minPrice"} - Per night</p>
          </section>
          <button>Update</button>
          <button>Delete</button>
        </CardAdmindSc>
        <CardAdmindSc>
          <picture>
            <img src={"hotel.media?.url"} alt={"hotel.name"} loading="lazy" />
          </picture>
          <section className="card-title">
            <h1>{"hotel.name"}</h1>
            <p>⭐{"hotel.starRating"}</p>
          </section>
          <section className="card-details">
            <p>{"hotel.brand"}</p>
            <p>{"checkIn"} to {"checkOut"}</p>
            <p>{"hotel.ratesSummary.minCurrencyCode"} {"hotel.ratesSummary.minPrice"} - Per night</p>
          </section>
          <button>Update</button>
          <button>Delete</button>
        </CardAdmindSc>
        <CardAdmindSc>
          <picture>
            <img src={"hotel.media?.url"} alt={"hotel.name"} loading="lazy" />
          </picture>
          <section className="card-title">
            <h1>{"hotel.name"}</h1>
            <p>⭐{"hotel.starRating"}</p>
          </section>
          <section className="card-details">
            <p>{"hotel.brand"}</p>
            <p>{"checkIn"} to {"checkOut"}</p>
            <p>{"hotel.ratesSummary.minCurrencyCode"} {"hotel.ratesSummary.minPrice"} - Per night</p>
          </section>
          <button>Update</button>
          <button>Delete</button>
        </CardAdmindSc>
        <CardAdmindSc>
          <picture>
            <img src={"hotel.media?.url"} alt={"hotel.name"} loading="lazy" />
          </picture>
          <section className="card-title">
            <h1>{"hotel.name"}</h1>
            <p>⭐{"hotel.starRating"}</p>
          </section>
          <section className="card-details">
            <p>{"hotel.brand"}</p>
            <p>{"checkIn"} to {"checkOut"}</p>
            <p>{"hotel.ratesSummary.minCurrencyCode"} {"hotel.ratesSummary.minPrice"} - Per night</p>
          </section>
          <button>Update</button>
          <button>Delete</button>
        </CardAdmindSc>
      </SectionAdminSc>

    </DashboardAdminSC>
  )
}
