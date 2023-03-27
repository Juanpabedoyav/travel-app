import styled from "styled-components"

export const SectionFormSC = styled.section`
    position: relative;
    margin: 1rem auto;
    background: linear-gradient(
        -30deg,
        ${props => props.theme.colors.main[200]},
        ${props => props.theme.colors.main[100]});
    width: 80%;
    
    max-width: 80%;
    min-width: 80%;
    border-radius: 3rem;
    height: 500px;
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
        opacity: 0.8;
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
    width: 70%;
    margin: 0 auto;
    box-shadow: 0 6px 6px  rgba(0, 0, 0, 0.4);
    border-radius: 3rem;
    background: linear-gradient(
        ${props => props.theme.colors.secondary[400]},
        ${props => props.theme.colors.secondary[200]},
        ${props => props.theme.colors.secondary[100]});
    height: 80px;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .buttonSearch{
        height: 100%;
    }
    .field{
        display: flex;
        height: 100%;
        flex-direction: column;
        width: 100%;
    }
    div:nth-child(2),div:nth-child(3){
        border-left: 1px solid ${props => props.theme.colors.secondary[700]};
    }
    label{
        text-align: center;
        margin: 0.5rem;
    }

`
export const InputSC = styled.input`
    border: none;
    height: 30px;
    margin: 0 auto;
    text-align: center;
    ::placeholder{
        text-align: center;
    }
`
export const ButtonSearchSC = styled.button`
    height: 100%;
    width: 200px;
    cursor: pointer;
    border-radius: 2rem;
    font-weight: 700;
    font-size: 1rem;
    box-shadow: 0 0 1rem rgba(0,0,0,0.2);
    padding: 1rem;
    background-color: #fff;
    color: #fff;
    border: 1px solid  ${props => props.theme.colors.main[600]};
    background:linear-gradient(
        ${props => props.theme.colors.main[600]},
        ${props => props.theme.colors.main[500]},
        ${props => props.theme.colors.main[500]},
        ${props => props.theme.colors.main[500]});;
        :hover{
        color:  ${props => props.theme.colors.main[600]};
        background: #fff;
        border: 2px solid  ${props => props.theme.colors.main[600]};
        }
`