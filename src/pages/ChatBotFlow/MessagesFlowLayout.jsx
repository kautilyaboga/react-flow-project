import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import NodesPanel from './NodesPanel';
import Button from '@mui/material/Button';
import '../../index.css';
import 'reactflow/dist/style.css';
import NodeEditor from './NodeEditor';
import MessagesFlowRender from "./MessagesFlowRender"
import { useNodesState } from 'reactflow';

const drawerWidth = 240;
const initialNodes = [
  {
    id: '1',
    type: 'textNode',
    data: { name: 'input node',job : 'default node' },
    position: { x: 250, y: 5 },
  },
];

export default function MessagesFlowLayout({ onEditNodeMessage}) {

  const [nodeEditMode, setNodeEditMode] = React.useState(false);
  const [nodeEditData, setNodeEditData] = React.useState({});
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Top Menu */}
      <AppBar
        position="fixed"
        // sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background : "#535353" }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            Chatbot Flow Builder
          </Typography>
          <Button variant="contained" sx={{borderRadius : "20px"}} size="small">Save Changes</Button>
        </Toolbar>
      </AppBar>
      
      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
        <div style={{ width: '100vw', height: '85vh' }}>
          <MessagesFlowRender
            setNodeEditData ={setNodeEditData}
            setNodeEditMode ={setNodeEditMode}
            nodes ={nodes}
            setNodes ={setNodes}
            onNodesChange ={onNodesChange}
          />
        </div>
      </Box>

      {/* Side Panel */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />

        {/* Shows Nodesl Panel in normal mode, In Edit Mode shows the Node Editor */}
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

      </Drawer>
    </Box>
  );
}
