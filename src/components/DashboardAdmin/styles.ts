import styled from "styled-components"

export const DashboardAdminSC = styled.section`
display: flex;
flex-direction: row;
a{
        margin: 1rem 0;
        text-decoration:none;
        text-align: center;
        font-size: 1.2rem;
        color:${props => props.theme.colors.main[600]};
        border-radius: 1rem;
        border: 1px solid  ${props => props.theme.colors.main[600]};
        box-shadow: 0 0 1rem rgba(0,0,0,0.2);
        background-color: #fff;
        padding: 1rem;
        :hover{
        color: #fff;
        background:linear-gradient(
        ${props => props.theme.colors.main[600]},
        ${props => props.theme.colors.main[500]},
        ${props => props.theme.colors.main[500]},
        ${props => props.theme.colors.main[500]});;
        }
    }
.actions{
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 1rem;
    border-right: 1px solid rgba(0,0,0,0.2);
    height: 100vh;
    button{
        margin: 1rem 0;
        font-size: 1.2rem;
        font-weight: 700;
        color:${props => props.theme.colors.main[600]};
        border-radius: 1rem;
        border: 1px solid  ${props => props.theme.colors.main[600]};
        box-shadow: 0 0 1rem rgba(0,0,0,0.2);
        background-color: #fff;
        padding: 1rem;
        :hover{
        color: #fff;
        background:linear-gradient(
        ${props => props.theme.colors.main[600]},
        ${props => props.theme.colors.main[500]},
        ${props => props.theme.colors.main[500]},
        ${props => props.theme.colors.main[500]});;
        }
    }
}
`

export const SectionAdminSc = styled.section`
width: 80%;
margin: 1rem auto;
padding: 2rem;
display: flex;
justify-content: flex-start;
flex-direction: column;
flex-wrap: wrap;
gap: 1rem;
h1{
  font-size: 1.2rem;
}
`

export const CardAdmindSc = styled.div`
box-shadow: 0 0 10px 0 rgba(0,0,0,0.8);
width: 260px;
padding: 1rem;
.card-title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 1.1rem;
        color: #000;
        h1{
           display:block;
            
        }
        
    }
    .card-details{
        font-size: 1rem;   
        color: #0000000;
        p:last-child{
            color: #000;
            font-weight:700;
        }
    }
img{
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 1rem;
}
  button{
        margin: 0.4rem auto;
        font-size: 1rem;
        font-weight: 700;
        color:${props => props.theme.colors.main[600]};
        border-radius: 1rem;
        border: 1px solid  ${props => props.theme.colors.main[600]};
        box-shadow: 0 0 1rem rgba(0,0,0,0.2);
        background-color: #fff;
        padding: 1rem;
        :hover{
        color: #fff;
        background:linear-gradient(
        ${props => props.theme.colors.main[600]},
        ${props => props.theme.colors.main[500]},
        ${props => props.theme.colors.main[500]},
        ${props => props.theme.colors.main[500]});;
        }
    }
`

export const FormCreateHotelSc = styled.form`
width: 40%;
height: 500px;
padding: 1rem;
margin: 1rem auto;
 background:linear-gradient(
        ${props => props.theme.colors.secondary[500]},
        ${props => props.theme.colors.secondary[300]},
        ${props => props.theme.colors.secondary[200]},
        ${props => props.theme.colors.secondary[100]}
    );
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
   align-items: stretch;
   box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
   border-radius: 1rem;
button{
        margin: 0.4rem auto;
        font-size: 1rem;
        font-weight: 700;
        color:${props => props.theme.colors.main[600]};
        border-radius: 1rem;
        border: 1px solid  ${props => props.theme.colors.main[600]};
        box-shadow: 0 0 1rem rgba(0,0,0,0.2);
        background-color: #fff;
        padding: 1rem;
        width: 50%;
        :hover{
        color: #fff;
        background:linear-gradient(
        ${props => props.theme.colors.main[600]},
        ${props => props.theme.colors.main[500]},
        ${props => props.theme.colors.main[500]},
        ${props => props.theme.colors.main[500]});;
        }
    }

`

export const FieldsCreateHotelSc = styled.div`
  height: 2rem;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 250px;
  gap: 0.4rem;
label{
  width: 50px;
  margin: 0.3rem;
  min-width: 50px;
}
input{
  padding-left: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  min-width: 100px;
  line-height: 1.5;
  background:linear-gradient(
        ${props => props.theme.colors.secondary[200]},
        ${props => props.theme.colors.secondary[300]},
        ${props => props.theme.colors.secondary[400]},
        ${props => props.theme.colors.secondary[500]});
        :focus{
          outline: none;
          border: 3px solid
            ${props => props.theme.colors.main[400]};
        }
}
input[type="url"]{
    width: 100%;
}
input[name="price"]{
    width: 100%;
}
`

export const FieldsCreateHotelActionsSc = styled.div`
display: flex;
flex-direction: row;
gap: 0.5rem;
`

