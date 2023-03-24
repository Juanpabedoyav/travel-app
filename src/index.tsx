import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { HotelProvider } from "./context/Hotels/HotelProvider"
import { UserSearchProvider } from "./context/UserSearch/UserSearchProvider"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <UserSearchProvider>
      <HotelProvider>
        <App />
      </HotelProvider>
    </UserSearchProvider>
  </React.StrictMode>
)


