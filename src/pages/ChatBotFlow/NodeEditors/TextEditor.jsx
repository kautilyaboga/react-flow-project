import React from "react";
import TextField from "@mui/material/TextField";

export default function TextEditor({ nodeEditData, setNodes }) {

  function onEditNodeMessage(event) {
    const message = event?.target?.value;

    setNodes((prevState) => {
      return prevState?.map((node) => {
        // console.log(node);

        if (node?.id !== nodeEditData?.id) {
          return node;
        }
        let newNode = { ...node };
        newNode.data.name = message;
        return newNode;
      });
    });

    // This is not an ideal way of real time rendering the node 
    // but react flow library doesn't recognize node data key change.
    // So no re-render is triggered. 
    // We are manually changing DOM data to have realtime update of node.
    document.getElementById(`${nodeEditData?.id}-message`).innerHTML = message;
  }

  return (
    <TextField
      autoFocus={true}
      minRows={3}
      placeholder=" Write some message"
      onChange={onEditNodeMessage}
      label="Text"
      multiline
      id="filled-multiline-static"
      variant="filled"
      sx={{ background: "#f0f2f2", width : "100%" }}
      value={nodeEditData?.data?.name}
    />
  );
}
