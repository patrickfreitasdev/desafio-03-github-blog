import { styled } from "styled-components";

export const IssueContainer = styled.div`

    display: flex;
    flex-direction: column;

    max-width: 890px;
    padding: 0 1.25rem;
    margin: 0 auto;
    margin-bottom: 6rem;
    
`

export const IssueContainerBody = styled.div`
    padding: 2.5rem 2rem;

    ul, ol{
        padding: 1rem;
    }

    h1{
        margin-bottom: 1.2rem 0;
    }

    h2{
        margin: 1rem 0;
    }

    code{
        background-color: ${props => props.theme["base-profile"]};
        width: 100%;
        display: block;
        padding: 1.2rem;
        margin: 1.2rem 0;
    }
`
