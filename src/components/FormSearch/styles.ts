import styled from "styled-components"

export const SectionFormSC = styled.section`
    position: relative;
    margin: 1rem auto;
    background-color:#00c66d;
    width: 80%;
    max-width: 80%;
    min-width: 80%;
    border-radius: 3rem;
    height: 656px;
    img{
        border-radius: 0.1rem 3rem 3rem 0.1rem;
        display: block;
        float: right;
        height: 100%;
        min-width: 40%;
        max-width: 40%;
        object-fit: cover;
    }
    .banner{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;
        p{
            font-size: 64px;
            margin: 5rem 4rem 0 4rem;
            width: 600px;
            height: 200px;
        }
    }
`

export const FormSC = styled.form`
    position: absolute;
    top: 80%;
    left: 0%;
    right: 0%;
    padding-left: 1rem;
    width: 80%;
    max-width: 80%;
    min-width: 80%;
    margin: 0 auto;
    box-shadow: 0 0 0.5rem 0.1rem #000000;
    border-radius: 3rem;
    background-color: #fff ;
    height: 80px;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .buttonSearch{
        height: 100%;
    }
    label{
        margin: 0.5rem;
    }
`

export const ButtonSearchSC = styled.button`
    border-radius:3rem ;
    height: 100%;
    width: 200px;
    cursor: pointer;
`