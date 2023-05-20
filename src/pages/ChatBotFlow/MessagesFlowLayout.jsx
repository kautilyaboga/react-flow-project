import * as React from 'react';
import { useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import '../../index.css';
import NodeEditor from './NodeEditor';
import MessagesFlowRender from "./MessagesFlowRender"
import NodesPanel from './NodesPanel';
import NavBar from './NavBar';
import Notification from '../../components/Notification';

// Added an Inital Node to Show on the Screen
const initialNodes = [
  {
    id: '1',
    type: 'textNode',
    data: { name: 'Message Node' },
    position: { x: 250, y: 5 },
  },
];

const drawerWidth = 200; // Defining the space used by side bar.
const navBarHeight = 64; // Rendering main body correctly.

export default function MessagesFlowLayout({ onEditNodeMessage}) {

  const [nodeEditMode, setNodeEditMode] = React.useState(false);
  const [nodeEditData, setNodeEditData] = React.useState({});
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [notificationData, setNotificationData] = React.useState({
    severity : "",
    message : '',
  });
  
  //  Keeping the nodes and edges data at higher level so that 
  // 1. We can give and manipulate nodes data in NodeEditor.
  // 2. Check edges while clicking on save changes.
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <React.Fragment>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        {/* Top Nav Bar */}
        <NavBar
          nodes = {nodes}
          edges ={edges}
          setNotificationOpen ={setNotificationOpen}
          setNotificationData ={setNotificationData}
        />

        {/* Main Content - The Nodes are Rendered Here */}
        <Box
          component="main"
          sx={{ 
            flexGrow: 1, 
            bgcolor: 'background.default', 
            p: 3,
            height: `calc(100vh - ${navBarHeight}px)`,
            // Can use marginTop or the toolbar
            // marginTop : `${navBarHeight}px`, 
            p : 0,
          }}
        >
          <Toolbar />
          <Box sx={{ 
            width: '100vw',
            height: '100%',
            }}>
            <MessagesFlowRender
              setNodeEditData ={setNodeEditData}
              setNodeEditMode ={setNodeEditMode}
              nodes ={nodes}
              setNodes ={setNodes}
              onNodesChange ={onNodesChange}
              edges ={edges}
              setEdges ={setEdges}
              onEdgesChange ={onEdgesChange}
              notificationOpen ={notificationOpen}
              setNotificationOpen ={setNotificationOpen}
              notificationData ={notificationData}
              setNotificationData ={setNotificationData}
            />
          </Box>
        </Box>

        {/* Nodes Panel / Side Panel*/}
        <Drawer
          sx={{
            width: "100%",
            minWidth: `${drawerWidth}px`,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width : "20%",
              minWidth: `${drawerWidth}px`,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Toolbar />
          <aside>
          {/* Shows Nodes Panel in normal mode, In Edit Mode shows the Node Editor */}
          {!nodeEditMode ? <NodesPanel
            nodeEditMode ={nodeEditMode}
            setNodeEditMode ={setNodeEditMode}
          /> : 
          <NodeEditor
            nodeEditData ={nodeEditData}
            onEditNodeMessage ={onEditNodeMessage}
            setNodeEditMode ={setNodeEditMode}
            setNodes ={setNodes}
          />}
         </aside>
        </Drawer>
      </Box>

      <Notification
        open={notificationOpen}
        setOpen ={setNotificationOpen}
        severity ={notificationData?.severity}
        message ={notificationData?.message}
      />
    </React.Fragment>

  );
}
