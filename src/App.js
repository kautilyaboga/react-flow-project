import React from 'react';
// import ReactFlow from 'reactflow';
import DnDFlow from './pages/ChatBotFlow/DnDFlow';
import 'reactflow/dist/style.css';
import MessagesFlow from './pages/ChatBotFlow/MessagesFlow';

// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];

// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  return (
    <MessagesFlow>
      <div style={{ width: '100vw', height: '85vh' }}>
        <DnDFlow/>
      </div>
    </MessagesFlow>
  );
}