import styled from "styled-components";
const StyledBox = styled.div`
    border: .25px solid black;
    width:66%;
    height:70vh;
    background-color:lightCoral;
    margin:5rem 0 0 1rem;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
`

export function Main({ children }) {
    return (
        <StyledBox>
            {children}
        </StyledBox>
    )
}