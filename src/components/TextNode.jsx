import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Typography from '@mui/material/Typography';
import { customBoxShadow } from "../Data/utils";

// Please wrap all Nodes in Memos as it is suggested by react-flow to be efficient.

function TextNode({ data, selected }) {
  return (
      <Grid
        sx={{ 
          display: "flex",
          flexDirection: 'row',
          border : selected ? "2px solid #a47aff" : null,
          borderRadius : "10px",
          alignContent: 'stretch',
          fontSize : "9px",
          maxWidth : "250px",
         }}
        container
        alignItems="center"
      >
        <Grid 
          sx={{
            background : "#B3F0E1",
            borderRadius : "10px 10px 0 0",
            height : "20px",
            justifyContent: 'space-between',
            px : 1,
            alignItems : "center",
            boxShadow : customBoxShadow,

          }}
          xs={12}
          item
          container
        >
          <Box sx={{ display: 'inline-flex', alignItems : "center" }}>
            <MessageOutlinedIcon sx={{pr:"3px",maxHeight : "100%", maxWidth: "100%",height : "8px",width : 'inherit'}}/>
            <Typography sx={{fontWeight : "bold", fontSize : "inherit"}}> Send Message </Typography>
          </Box>
          <Box sx={{ display: 'inline-flex', alignItems : "center", justifyContent : "center", background :"white", borderRadius : "50%", padding : "1px" }}>
            <WhatsAppIcon color="success" sx={{maxHeight : "100%", maxWidth: "100%",height : "10px",width : 'inherit'}}/>
          </Box>
        </Grid>
      
        <Grid 
          sx={{
            background : "white",
            borderRadius : "0 0 10px 10px",
            height : "40px",
            px : 1,
            alignItems : "center",
            boxShadow : customBoxShadow,

          }}
          xs={12}
          item
          container
        >
          {data.name}
        </Grid>

        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </Grid>
  );
}

export default memo(TextNode);
