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
 background:linear-gradient(
        ${props => props.theme.colors.secondary[500]},
        ${props => props.theme.colors.secondary[300]},
        ${props => props.theme.colors.secondary[200]},
        ${props => props.theme.colors.secondary[100]});
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-evenly;
   align-items: stretch;
   box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
   border-radius: 1rem;
  button{ 
    text-transform: uppercase;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    width: 80%;
    margin: 0.5rem auto;
    height: 47px;
    background: linear-gradient(
          ${props => props.theme.colors.main[600]},
          ${props => props.theme.colors.main[500]},
          ${props => props.theme.colors.main[500]},
          ${props => props.theme.colors.main[500]});
    border: none;
    border-radius: 0.4rem;
  :hover{
    color:  ${props => props.theme.colors.main[800]};
    background:linear-gradient(
        -50deg,
        ${props => props.theme.colors.main[600]},
        ${props => props.theme.colors.main[300]},
        ${props => props.theme.colors.main[200]},
        ${props => props.theme.colors.main[200]});
    border: 2px solid ${props => props.theme.colors.main[500]};
 }
}
hr{
    margin: 1rem 0;
  }
.emergency--field{
  display: flex;
  flex-direction: row;
}
`
export const FieldsReservationSc = styled.div`
  height: 2rem;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 250px;
  gap: 0.4rem;
label{
  width: 78px;
  margin: 0.3rem;
  min-width: 70px;
}
input, select{
  padding-left: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  min-width: 200px;
  line-height: 1.5;
  background:linear-gradient(
        ${props => props.theme.colors.secondary[200]},
        ${props => props.theme.colors.secondary[300]},
        ${props => props.theme.colors.secondary[400]},
        ${props => props.theme.colors.secondary[500]});
        :focus{
          outline: none;
          border: 2px solid
            ${props => props.theme.colors.main[400]};
        }
}
`

export const ReservationDatesSc = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
    input {
      outline: none;
      border: none;
      display:block;
      padding: 0.2rem;
    }
  label {
    display: block;
    margin: 0 auto;
    font-weight: 800;
    text-align: center;
  }
 .reservations-dates--checkIn{
  display: inline-block;
  border-radius: 1rem 0 0rem 0; 
  padding: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .reservations-dates--checkOut{
    display: inline-block;
    border-radius: 0 1rem 0 0 ; 
    padding: 3px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`

export const ReservationRoomSc = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding: 3px;
 #room{
  display: inline-block;
  height: 40px;
  padding: 3px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 60%;
  font-weight: 800;
    background:linear-gradient(
          ${props => props.theme.colors.secondary[200]},
          ${props => props.theme.colors.secondary[300]},
          ${props => props.theme.colors.secondary[400]},
          ${props => props.theme.colors.secondary[500]});
        :focus{
          outline: none;
          border: 2px solid
            ${props => props.theme.colors.main[400]};
        }
    option{
      padding: 0.4rem;
      margin: 0.4rem;
      font-size: 1.2rem;
    }
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