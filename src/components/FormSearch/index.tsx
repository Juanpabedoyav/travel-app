import {  useContext, useRef, useState } from "react"
import { ButtonSearchSC, FormSC, InputSC } from "./styles"
import { UserSearchState } from "../../context/UserSearch/UserSearchProvider"
import { UserSearchContext } from "../../context/UserSearch/UserSearchContext"
import { OptionsLocations } from "../OptionsLocations"
export const FormSearch = () => {
  //get dispatch from context
  const {dispatch} = useContext(UserSearchContext)
  // set state for input
  const [input, setInput] = useState<UserSearchState>()
  const debounceRef = useRef<NodeJS.Timeout>()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    if(debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setInput({
        ...input,
        [e.target.name] : e.target.value
      })
    },500)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    //dispatch action to save data in context
    dispatch({type: "NEW_SEARCH", payload: input})
  }
  return (
    <FormSC onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="place">Location</label>
        <InputSC  name={"place"}type="search" list="place" autoComplete="on"onChange={handleInput} />
        <datalist id="place">
          <OptionsLocations/>
        </datalist>
      </div>
      <div className="field">
        <label htmlFor="checkIn">Check In</label>
        <InputSC  id="checkIn" name={"checkIn"} type="date" onChange={handleInput} />
      </div>
      <div className="field">
        <label htmlFor="checkOut">Check Out</label>
        <InputSC id="checkOut" name={"checkOut"} type="date" onChange={handleInput}/>
      </div>
      <div className={"buttonSearch"}>
        <ButtonSearchSC>Search</ButtonSearchSC>
      </div>
    </FormSC>
  )
}
