import { FormSearch } from "../../components/FormSearch"
import { SectionFormSC } from "../../components/FormSearch/styles"

export const Home = () => {
  return (
    <SectionFormSC>
      <div className={"banner"}>
        <p>Find your perfect place to stay</p>
        <img src={"https://res.cloudinary.com/dflxhnzgs/image/upload/v1679621329/image_y2u0u0.png"} alt="logo" />
      </div>
      <FormSearch/>
    </SectionFormSC> 
  )
}
