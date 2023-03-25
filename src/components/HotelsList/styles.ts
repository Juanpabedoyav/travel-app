import styled from "styled-components"

export const SectionHotelsSc = styled.section`
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
.card-hotels{
    width: 260px;
    height: 350px;
    text-decoration: none;
    section{
        display: flex;
        flex-direction: row;
        justify-content: space-between;


    }
}
`
export const CardSc = styled.article`

img{
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 1rem;
}
`