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
      sx={{ background: "#f0f2f2" }}
      value={nodeEditData?.data?.name}
    />
  );
}
