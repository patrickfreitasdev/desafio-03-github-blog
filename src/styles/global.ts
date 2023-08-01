import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 768px) {
        font-size: 87.5%;
    }
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme["yellow-dark"]};
}

body{
    background-color: ${props => props.theme["base-background"]};
    color: ${props => props.theme["base-text"]};
}

body,input, textarea, button{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
}


`