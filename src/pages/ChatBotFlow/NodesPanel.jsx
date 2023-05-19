import React from "react";
import "../../index.css";
import NodeTypes from "../../Data/Constants/NodeTypes";
import Grid from "@mui/material/Grid";
import { customBoxShadow } from "../../Data/utils";

export default function NodesPanel() {
  
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  console.log(NodeTypes?.text);
  return (
    <aside>
      {/* <div className="dndnode" onDragStart={(event) => onDragStart(event, NodeTypes?.text)} draggable>
        <div>
          Text Node
        </div>
      </div> */}

      <Grid
        sx={{ boxShadow: customBoxShadow, justifyContent: "center", pb: 2 }}
        container
      >
        <Grid
          container
          item
          xs={12}
          sx={{
            borderRadius: "10px 10px 0 0 ",
            justifyContent: "center",
            p: 0.5,
            fontSize: "15px",
            background: "#dbdbdb",
            alignItems: "center",
          }}
        >
          <Grid item> Nodes Panel</Grid>
        </Grid>
        <Grid component="form" item>
          <div
            onDragStart={(event) => onDragStart(event, NodeTypes?.text)}
            draggable
          >
            <div>Text Node</div>
          </div>
        </Grid>
      </Grid>
    </aside>
  );
}
