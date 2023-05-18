import React from 'react';
import 'reactflow/dist/style.css';
import MessagesFlowLayout from "./MessagesFlowLayout"
import MessagesFlowRender from "./MessagesFlowRender"

export default function ChatbotFlow() {


    return <MessagesFlowLayout/>
    //  <div style={{ width: '100vw', height: '85vh' }}>
    //   <MessagesFlowRender
    //     setNodeEditData ={setNodeEditData}
    //     setNodeEditMode ={setNodeEditMode}
    //   />
    // </div>
  // </MessagesFlowLayout>;
}

