import React, { useState, useRef, useCallback, useMemo } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';
import TextNode from '../../components/TextNode';
import '../../index.css';
import Notification from '../../components/Notification';
import NodeTypes from '../../Data/Constants/NodeTypes';


const nodeTypes = {
  "textNode": TextNode,
};

let id = 0;
const getId = () => `dndnode_${id++}`;


const MessagesFlowRender = ({nodes, setNodes, onNodesChange, setNodeEditData, setNodeEditMode}) => {
  const reactFlowWrapper = useRef(null);
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationData, setNotificationData] = useState({
    severity : "",
    message : '',
  });

  // const nodeTypes = useMemo(() => ({ messageNode: TextNode }), []);

  // console.log(edges);
  // console.log(nodes);
  // console.log(reactFlowInstance);

  //  This function call connects the nodes with edges.
  const onConnect = useCallback((params) => {
    console.log(params);
    if (edges?.length && edges?.some((edge)=> edge?.source === params?.source)) {
      console.log("Source Connection Already Exists");
      setNotificationOpen(true)
      setNotificationData({
        severity : "error",
        message : 'Source Connection Already Exists',
      })
      return () => {}
    }
    return setEdges((eds) => addEdge(params, eds)), []
  });
  

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      let newNode
      if (type === NodeTypes?.text) {
        newNode = {
          id: getId(),
          type,
          position,
          data: { name: `Write Some Message` },
        };
      }

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );


  function onSelectionChange(params) {
    console.log(params?.nodes);
    // console.log(params?.edges);
    if (params?.nodes?.length) {
      setNodeEditMode(true)
      setNodeEditData(params?.nodes?.at(-1))
    }
    else{
      setNodeEditMode(false)
      // setNodeEditData({})
    }
  } 

  function onSelect(params) {
    console.log(params);
  }


  return (
    <React.Fragment>
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes = {nodeTypes}
            fitView
            onSelectionChange = {onSelectionChange}
            onSelect={onSelect}
          >
            <Background variant={BackgroundVariant.Dots} />
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>

    <Notification
      open={notificationOpen}
      setOpen ={setNotificationOpen}
      severity ={notificationData?.severity}
      message ={notificationData?.message}
    />
    </React.Fragment>
  );
};

export default MessagesFlowRender;
