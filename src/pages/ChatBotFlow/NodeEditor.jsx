import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { customBoxShadow } from "../../Data/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import NodeTypes from "../../Data/Constants/NodeTypes";
import TextEditor from "./NodeEditors/TextEditor";

export default function NodeEditor({ nodeEditData, setNodeEditMode, setNodes }) {
  // console.log(nodeEditData);

  function onBackClick() {
    setNodeEditMode(false);
    setNodes((prevState)=>{
      return prevState?.map((node)=>{
        console.log(node);
        const newNode ={...node};
        newNode.selected = false;
        console.log(newNode);
        return newNode
      })
    })
  }

  return (
    <Grid sx={{ boxShadow: customBoxShadow, justifyContent : "center", pb:2, }} container>
      <Grid item xs={12}>
        <Box
          sx={{
            background: "white",
            borderRadius: "0 0 10px 10px",
            justifyContent: "space-between",
            p: 1,
            pt: 3,
            display: "flex",
          }}
        >
          <Box>
            <IconButton size="small" onClick={onBackClick}>
              <ArrowBackIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box>Message</Box>
          <div></div>
        </Box>
      </Grid>
      {/* Add different node editors here based on the Message type */}
      <Grid 
      component="form"
      item>
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
