import { styled } from "styled-components";

export const HomeContainer = styled.div`

    display: flex;
    flex-direction: column;

    max-width: 890px;
    padding: 0 1.25rem;
    margin: 0 auto;
`

export const PublicacoesContainer = styled.main`
    
    margin-top: 3rem;
    margin-bottom: 16rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    
`