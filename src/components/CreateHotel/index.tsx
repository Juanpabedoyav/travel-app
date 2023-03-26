import  ReactDOM  from "react-dom"
import { CreateModalHotelSC } from "./styles"

interface CreateHotelPros {
    children: JSX.Element | JSX.Element[],
    open: boolean,
    close: () => void
}



export const  CreateHotel = ({children, open, close}: CreateHotelPros)  =>{
  const portal = document.getElementById("portal-form") as HTMLElement
  if(!open) return null

  return ReactDOM.createPortal(
    <>
      <CreateModalHotelSC>
        <button onClick={close}>Close Modal</button>
        {children}
      </CreateModalHotelSC>
    </>,
    portal 
  )
}