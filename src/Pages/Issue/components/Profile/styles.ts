import { styled } from "styled-components";

export const ProfileContainer = styled.section`

    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 2.5rem 2.5rem 2rem 2rem;

    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
    border-radius: 10px;

    background-color: ${props => props.theme["base-profile"]};

    margin-top: -5.375rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ProfileContent = styled.div`

    flex: 1;
    display: flex;
    gap: 8px;
    flex-direction: column;

    header{

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: ${props => props.theme["base-title"]};
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;

        div{
            display: flex;
            justify-content: space-between;
        }
        
       
        a{
            text-decoration: none;
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 700;
            line-height: 160%; /* 19.2px */
            text-transform: uppercase;
            color: ${props => props.theme.blue};
            display: flex;
            gap: 8px;
            align-items: center;
        }
    }
`

export const ProfileContentBody = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p{
        line-height: 160%; /* 25.6px */
    }

    footer{
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: wrap;
    }
`

export const ProfileContentBodyData = styled.span`

    display: flex;
    align-items: center;
    gap: 8px;


    svg{
        color: ${props => props.theme["base-label"]};
    }
`

export const LoadingContainer = styled.div`
   padding: 3.2rem;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
`

