import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { customBoxShadow } from "../../Data/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NodeTypes from "../../Data/Constants/NodeTypes";
import TextEditor from "./NodeEditors/TextEditor";
import Button from '@mui/material/Button';

export default function NodeEditor({ nodeEditData, setNodeEditMode, setNodes }) {
  // console.log(nodeEditData);

  function onBackClick() {
    setNodeEditMode(false);
    setNodes((prevState)=>{
      return prevState?.map((node)=>{
        // console.log(node);
        const newNode ={...node};
        newNode.selected = false;
        // console.log(newNode);
        return newNode
      })
    })
  }

  return (
    <Grid sx={{ boxShadow: customBoxShadow, justifyContent : "center", pb:2, borderRadius : "10px", }} container>
    {/* <Grid sx={{ boxShadow: customBoxShadow, justifyContent : "center", pb:2, }} container> */}
      <Grid item xs={12}>
        <Box
          sx={{
            justifyContent: "space-between",
            alignItems : "center",
            p: 1,
            // pt: 3,
            display: "flex",
          }}
        >
          <Button 
            sx={{
              p:0.5, 
              minWidth : "inherit", 
              cursor : "pointer",
              borderRadius : "50%"
            }} 
            size="small" 
            onClick={onBackClick}
            >
              <ArrowBackIcon fontSize="small" />
          </Button>
          <Box>Message</Box>
          <div></div>
        </Box>
      </Grid>
      {/* Add different node editors here based on the Message type */}
      <Grid 
      component="form"
      item
      xs={12}
      >
        {NodeTypes.text === nodeEditData?.type ? (
          <React.Fragment>
            <TextEditor
              nodeEditData={nodeEditData}
              setNodes ={setNodes}
            />
          </React.Fragment>
        ) : null}
      </Grid>

    </Grid>
  );
}
