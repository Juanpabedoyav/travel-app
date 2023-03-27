import styled from "styled-components"

export const DashboardAdminSC = styled.section`
display: flex;
flex-direction: row;
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
padding: 1rem;
display: flex;
justify-content: flex-start;
flex-direction: row;
flex-wrap: wrap;
gap: 1rem;
`

export const CardAdmindSc = styled.div`
border: 1px solid black;
width: 260px;
height: 350px;
`
