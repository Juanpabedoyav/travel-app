import styled from "styled-components"

export const TitleHotelsListSc = styled.h1`
margin: 0 auto;
width: 90%;
padding: 2rem 0;
`
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
    
}
`
export const CardSc = styled.article`
.card-title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 1.1rem;
        color: #000;
        
    }
    .card-details{

    }
img{
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 1rem;
}
`