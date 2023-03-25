import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { HotelProvider } from "./context/Hotels/HotelProvider"
import { UserSearchProvider } from "./context/UserSearch/UserSearchProvider"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { AppRouter } from "./router"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserSearchProvider>
        <HotelProvider>
          <AppRouter />
        </HotelProvider>
      </UserSearchProvider>
    </ThemeProvider>
  </React.StrictMode>
)


