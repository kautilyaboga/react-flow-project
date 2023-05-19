import React from "react";
import styled from 'styled-components';
import Button from "@mui/material/Button";


ButtonMUI.defaultProps = {
  onClick : null,
  name : 'Button',
}


export default function  ButtonMUI  ({name ,onClick,style}) {

  const preStyle = {}
  // const preStyle = {minWidth : "100px", maxWidth : '150px'}

    return ( <Button 
      variant="contained" 
      sx={[{ 
        borderRadius: "20px",
        backgroundColor : "#d9d9d9",
        color : "#1c2626",
       },
       {
        '&:hover': {
          color: 'black',
          backgroundColor: 'white',
        },
      },
      ]} 
      size="small"
      style={{...style,...preStyle}}
      onClick={onClick}
      >
      {name}
    </Button>
    )
};

