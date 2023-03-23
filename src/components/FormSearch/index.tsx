import { useState } from "react"
import { UserSearchContextProps } from "../../context/UserSearch/UserSearchContext"
import { FormSC, SectionFormSC } from "./styles"

export const FormSearch = () => {
  const [input, setInput] = useState<UserSearchContextProps>()
  return (
    <SectionFormSC>
      <FormSC>
        <div>
          <label>Place</label>
          <input type="text"/>
        </div>
        <div>
          <label>Check In</label>
          <input type="date" />
        </div>
        <div>
          <label>Check Out</label>
          <input type="date" />
        </div>
        <button>Search</button>
      </FormSC>
    </SectionFormSC> 
  )
}
