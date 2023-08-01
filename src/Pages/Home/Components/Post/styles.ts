import { styled } from "styled-components";

export const PostContainer = styled.article`

    border: 1px solid transparent;
    border-radius: 10px;
    background-color: ${props => props.theme["base-post"]};

    &:hover{
        border-color: ${props => props.theme["base-border"]};
    }

    header{

        display: flex;

        h2{
            color: ${props => props.theme["base-title"]};
            font-size: 1.25rem;
            word-wrap: break-word;
            flex: 1;
        }
       
    }

    p{
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }

    a{
        text-decoration: none;
        color: currentColor;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        padding: 2rem;
    }
`