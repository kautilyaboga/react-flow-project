import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Typography from '@mui/material/Typography';

function MessageNode({ data }) {
  console.log(data);
  return (
    <React.Fragment>
      <Grid
        sx={{ 
          display: "flex",
          flexDirection: 'row',
          // border : "2px solid black",
          // borderRadius : "10px",
          alignContent: 'stretch',
          fontSize : "9px"
         }}
        container
        // padding={"10px 20px"}
        alignItems="center"
        // spacing={1}
      >
        <Grid 
          sx={{
            background : "#B3F0E1",
            borderRadius : "10px 10px 0 0",
            height : "20px",
            justifyContent: 'space-between',
            px : 1,
            alignItems : "center",
          }}
          xs={12}
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
        
        {/* <Grid xs={12} padding={"10px"} sx={{ color: "blue",border: "2px solid red"}}> */}

        <Grid 
          sx={{
            background : "white",
            borderRadius : "0 0 10px 10px",
            height : "40px",
            // justifyContent: 'space-between',
            px : 1,
            alignItems : "center",
          }}
          xs={12}
          container
        >
          {data.name}
        </Grid>

        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </Grid>
    </React.Fragment>
  );
}

export default memo(MessageNode);
