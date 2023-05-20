import React from 'react';
import ChatbotFlow from './pages/ChatBotFlow/ChatbotFlow';

// Documentation

// Code Structure
// App.js all the pages main component. 
// The page components are in the pages folder, seperated by page in a Folder.
// The components folder has all the common components.
// Any constants or Redux strucutre can be added in the Data Folder

// Libraries : 
// Material UI
// React Flow

// ChatbotFlow:
// Add any new node types in NodeTypes.js. Use only the constants for validation.


export default function App() {
  return (
    <ChatbotFlow/>
  );
}