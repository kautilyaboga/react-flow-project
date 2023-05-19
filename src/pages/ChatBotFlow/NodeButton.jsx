import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function NodeButton({nodeType, nodeText, icon}) {

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
      };

    return (
        <Grid item container xs={6}>

        <Grid
        container
        item 
         
        py={1} 
        px={2} 
        sx={{
          color : '#628fb7',
          border :"1px solid #628fb7", 
          borderRadius : "10px", 
          background : "white",
          justifyContent : "center",
          alignItems : "center",
          display : "flex",
          flexDirection : "column",
          cursor : "pointer"
        }} 
        // component={"button"}
        onDragStart={(event) => onDragStart(event, nodeType)}
        draggable
        >
          {icon}
          <Typography sx={{fontSize : "12px", pt:0.5}}>{nodeText}</Typography>
      </Grid>
      </Grid>
    );
}