import { styled } from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 4.5rem;
    gap: 0.75rem;

    header{
        display: flex;
        justify-content: space-between;
        strong{
            font-size: 1.125rem;
            color: ${props => props.theme["base-title"]};
            font-style: normal;
            font-weight: 700;
            line-height: 160%; /* 28.8px */
        }
        span{
            font-size: 0.875rem;
            color: ${props => props.theme["base-span"]};
        }
    }
    input{
        border-radius: 6px;
        border: solid 1px ${props => props.theme["base-border"]};
        background-color: ${props => props.theme["base-input"]};
        padding: 12px 16px;
        color: ${props => props.theme.white};

        &::placeholder{
            color: ${props => props.theme["base-label"]};
        }
    }
`