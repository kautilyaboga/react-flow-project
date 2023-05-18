import React from 'react';
import TextField from "@mui/material/TextField";

export default function TextEditor({nodeEditData, setNodes}) {

    function onEditNodeMessage(event) {
        const message = event?.target?.value;
        console.log(message);

        setNodes((prevState)=>{
            return prevState?.map((node)=>{
              // console.log(node);

              // if (node?.id !== nodeEditData?.id) {
              //   return node
              // }

              let newNode ={...node};
              // newNode.data.name = message;

              if (newNode?.id === nodeEditData?.id) {
                newNode.data.name = message;
              }

              console.log(newNode);
              return newNode
            })
          })

    }



    return (  
        <TextField
        autoFocus={true}
        defaultValue={nodeEditData?.data?.name}
        minRows={3}
        placeholder=" Write some message"
        // onChange={() => {}}
        onChange={onEditNodeMessage}
        label="Text"
        multiline
        id="filled-multiline-static"
        variant ="filled"
        sx={{background : "#f0f2f2"}}
        // value={nodeEditData?.at(-1)?.data?.name}
      />


    );
}

