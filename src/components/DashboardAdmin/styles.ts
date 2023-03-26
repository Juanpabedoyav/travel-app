import styled from "styled-components"

export const DashboardAdminSC = styled.section`
display: flex;
flex-direction: row;
.actions{
    display: flex;
    flex-direction: column;
    width: 15%;
    padding: 1rem;
    border-right: 1px solid black;
    height: 100vh;
    button{
        margin: 1rem;
        padding: 1rem;
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
