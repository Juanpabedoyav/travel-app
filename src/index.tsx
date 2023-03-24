import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { HotelProvider } from "./context/Hotels/HotelProvider"
import { UserSearchProvider } from "./context/UserSearch/UserSearchProvider"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserSearchProvider>
        <HotelProvider>
          <App />
        </HotelProvider>
      </UserSearchProvider>
    </ThemeProvider>
  </React.StrictMode>
)


