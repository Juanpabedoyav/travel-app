import  ReactDOM  from "react-dom"
import { ModalSC } from "./styles"

interface ModalPros {
    children: JSX.Element | JSX.Element[],
    open: boolean,
}



export const  Modal = ({children, open}: ModalPros)  =>{
  const portal = document.getElementById("portal-form") as HTMLElement
  if(!open) return null

  return ReactDOM.createPortal(
    <>
      <ModalSC>
        {children}
      </ModalSC>
    </>,
    portal 
  )
}