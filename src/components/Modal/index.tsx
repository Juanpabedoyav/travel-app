import  ReactDOM  from "react-dom"
import { ModalSC } from "./styles"

interface ModalPros {
    children: JSX.Element | JSX.Element[],
    open: boolean,
    close: () => void
}



export const  Modal = ({children, open, close}: ModalPros)  =>{
  const portal = document.getElementById("portal-form") as HTMLElement
  if(!open) return null

  return ReactDOM.createPortal(
    <>
      <ModalSC>
        <button onClick={close}>Close Modal</button>
        {children}
      </ModalSC>
    </>,
    portal 
  )
}