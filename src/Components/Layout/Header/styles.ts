import { styled } from "styled-components";
import Cover from '../../../assets/Cover.png';

export const HeaderContainer = styled.header`
    background-image: url(${Cover});
    background-size: cover;
    background-position: center;
    width: 100vw;
    padding: 4rem 1.25rem 8.375rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
    

    img{
        object-fit: contain;
    }

    span{
        color: ${props => props.theme.blue};
        font-family: 'Coda', cursive;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 38.4px */
        text-transform: uppercase;
    }
`