import styled from "styled-components";

const ButtonContainer1 = styled.button`
text-transformation: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--mainWhite);
color: var(--mainWhite);
border-radius: 0.3rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0rem;
transition: all 0.5s ease-in-out;
&:hover{
    background:var(--mainGrey);
}
&:focus{
    outline:none;
}
`;

const ButtonContainer2 = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid;
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.3rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0rem;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => props.cart ? "var(--darkYellow)" : "var(--mainBlue)"};
}
&:focus{
    outline:none;
}
`;

export {ButtonContainer1,ButtonContainer2};