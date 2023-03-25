import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "../screens/Home"
import { HotelDetails } from "../components/HotelDetails"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail/:id" element={<HotelDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}