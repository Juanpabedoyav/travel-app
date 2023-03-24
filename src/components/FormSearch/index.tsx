import {  useContext, useRef, useState } from "react"
import { ButtonSearchSC, FormSC, SectionFormSC } from "./styles"
import { UserSearchState } from "../../context/UserSearch/UserSearchProvider"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"
export const FormSearch = () => {
  const {dispatch} = useContext(UserSearchContext)
  const [input, setInput] = useState<UserSearchState>()
  const debounceRef = useRef<NodeJS.Timeout>()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setInput({
        ...input,
        [e.target.name] : e.target.value
      })
    },500)

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type: "NEW_SEARCH", payload: input})
  }
  return (
    <SectionFormSC>
      <div className={"banner"}>
        <p>Find your perfect place to stay</p>
        <img src={"https://res.cloudinary.com/dflxhnzgs/image/upload/v1679621329/image_y2u0u0.png"} alt="logo" />
      </div>
      <FormSC onSubmit={handleSubmit}>
        <div>
          <label>Place</label>
          <input name={"place"}type="text" onChange={handleInput}/>
        </div>
        <div>
          <label>Check In</label>
          <input name={"checkIn"} type="date"onChange={handleInput} />
        </div>
        <div>
          <label>Check Out</label>
          <input name={"checkOut"} type="date" onChange={handleInput}/>
        </div>
        <div className={"buttonSearch"}>
          <ButtonSearchSC>Search</ButtonSearchSC>
        </div>
      </FormSC>
    </SectionFormSC> 
  )
}
