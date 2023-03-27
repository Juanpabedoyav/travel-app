import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "../screens/Home"
import { HotelDetails } from "../components/HotelDetails"
import { DashboardAdmin } from "../components/DashboardAdmin"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail/:id" element={<HotelDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/777" element={<DashboardAdmin />} />
        <Route path="/777/:id" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}