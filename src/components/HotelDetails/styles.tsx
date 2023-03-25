import styled from "styled-components"

export const SectionHotelDetailsSc = styled.section`
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  .hotel-details{
    margin:  1rem 0;
    font-size: 1.1rem;
    color: #000;
    .hotel-deails-reviews{
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      p:nth-child(2){
        margin-left: 1rem;
      }
    }
  }
  .hotel-details-images{
    display: flex;
    flex-direction: row;
    height: 500px;
    gap:1rem;
    .details-image{
      width: 60%;
      object-fit: cover;
      height: 100%;
      border-radius: 1rem 0 0 1rem;
      &:hover{
      filter: brightness(0.8);
      cursor: pointer;
    }
    }
  }
  .hotel-details--othersimages{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 50%;
    img{
      object-fit: cover;
      width: 48%;
      height: 242px;
      cursor: pointer;
      &:hover{
        filter: brightness(0.8);
      }
    }
   
  }
`


export const SectionReservationSc = styled.section`
width: 100%;
margin: 2rem auto;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const FormReservationSc = styled.form`
.field {
  margin-bottom: 10px;
}

.field label {
  display: block;
  font-size: 12px;
  color: #777;
}

.field input {
  display: block;
  min-width: 250px;
  line-height: 1.5;
  font-size: 14px;
}
`

export const InfoReservationSc = styled.div`
  width: 60%;
  hr{
    margin: 1rem 0;
    width: 90%;
  }
  .info-reservation{
    list-style: none;
    padding: 2rem;
  li{
    margin: 0.8rem;
  }
  }
  .hotel-features{
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 2rem;
  li{
    margin: 0.8rem;
  }
  }

`