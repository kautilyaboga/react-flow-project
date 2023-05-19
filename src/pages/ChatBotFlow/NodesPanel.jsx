import React from "react";
import Grid from "@mui/material/Grid";
import "../../index.css";
import { customBoxShadow } from "../../Data/utils";
import NodeTypes from "../../Data/Constants/NodeTypes";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NodeButton from "./NodeButton";

export default function NodesPanel() {
  return (
    // <aside>
      <Grid
        sx={{
          boxShadow: customBoxShadow,
          justifyContent: "center",
          pb: 2,
          borderRadius: "10px",
          overflow: "hidden",
        }}
        container
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            justifyContent: "center",
            p: 0.5,
            fontSize: "15px",
            background: "#dbdbdb",
            alignItems: "center",
          }}
        >
          <Grid item> Nodes Panel</Grid>
        </Grid>
        <Grid p={1} container item spacing={1}>
          {/* Adding a Node Button of TextType.*/}
          {/* It is important here to provide the NodeType constant, this is used render the node.*/}
          <NodeButton
            nodeType={NodeTypes?.text}
            nodeText="Message"
            icon={<MessageOutlinedIcon />}
          />

          {/* <NodeButton
            nodeType ={NodeTypes?.text}
            nodeText ="Message"
            icon={<MessageOutlinedIcon/>}
          /> */}
        </Grid>
      </Grid>
    // </aside>
  );
}
