import styled from "styled-components"

export const SectionHotelDetailsSc = styled.section`
  margin: 2rem auto;
  display: flex;
  width: 80%;
  flex-direction: column;
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
      width: 500px;
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
    img{
      object-fit: cover;
      width: 210px;
      height: 242px;
      cursor: pointer;
      &:hover{
        filter: brightness(0.8);
      }
    }
   
  }
`


export const SectionReservationSc = styled.section`
border: 1px solid #ccc;
padding: 1rem;

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