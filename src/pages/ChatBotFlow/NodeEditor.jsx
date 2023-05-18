import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { customBoxShadow } from "../../Data/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import NodeTypes from "../../Data/Constants/NodeTypes";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import TextEditor from "./NodeEditors/TextEditor";

export default function NodeEditor({ nodeEditData, setNodeEditMode, setNodes }) {
  console.log(nodeEditData);
  // console.log(nodeEditData?.at(-1));

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
    <React.Fragment>
      <Grid sx={{ boxShadow: customBoxShadow, justifyContent : "center", pb:2, }} container>

        <Grid item xs={12}>
          <Box
            sx={{
              background: "white",
              borderRadius: "0 0 10px 10px",
              justifyContent: "space-between",
              p: 1,
              pt: 3,
              // boxShadow: customBoxShadow,
              display: "flex",
            }}
            // item
            // container
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

        <Grid 
         component="form"
        item>
          {NodeTypes.text === nodeEditData?.type ? (
            <React.Fragment>
              <TextEditor
                nodeEditData={nodeEditData}
                setNodes ={setNodes}
              />

              {/* <TextField
                autoFocus={true}
                defaultValue={nodeEditData?.at(-1)?.data?.name}
                minRows={3}
                placeholder=" Write some message"
                // onChange={() => {}}
                // onChange={onEditNodeMessage}
                label="Text"
                multiline
                id="filled-multiline-static"
                variant ="filled"
                sx={{background : "#f0f2f2"}}
                value={nodeEditData?.at(-1)?.data?.name}
              /> */}
            </React.Fragment>
          ) : null}
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
