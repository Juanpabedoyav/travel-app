import ReactDom from "react-dom"
interface CreateHotelPros {
    children: JSX.Element | JSX.Element[],
}



export const  CreateHotel = ({children}: CreateHotelPros)  =>{
  const portal = document.getElementById("portal") as HTMLElement
  
  return ReactDom.createPortal(
    <>
      <div>
        <button>Close Modal</button>
        {children}
      </div>
    </>,
    portal 
  )
}