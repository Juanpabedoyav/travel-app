import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "../screens/Home"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/detail/:id" element={<HotelDetail />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}