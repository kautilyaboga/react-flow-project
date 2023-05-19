import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${props => props.type === 'secondary' ? `#ffffff !important` : '#ffdfd6 !important'};
color: black !important;
border-radius: 25px;
border: ${props => props.type === 'secondary' ? `1px solid grey` : 'none'};;
height: 35px;
// width: 90%;
cursor: pointer;
&:hover {

  background-color: ${props => props.type === 'secondary' ? `#f2f0f0 !important` : '#fac7be !important'};
}

&@media only screen and (max-width: 1400px) {
  width: 120px;
}
`;

const Button = ({name ,onClick,type,style}) => {

  const preStyle = {minWidth : "100px", maxWidth : '150px'}

    return (
    <StyledButton
        // type={type}
        type={"button"}
        // className=""
        onClick={onClick? onClick : null}
        style={{...style,...preStyle}}
    >
        {name}
    </StyledButton>
    );
};

export default Button;