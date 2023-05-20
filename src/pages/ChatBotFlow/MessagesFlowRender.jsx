import React, { useState, useRef, useCallback, useMemo } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';
import TextNode from './Nodes/TextNode';
import '../../index.css';
import NodeTypes from '../../Data/Constants/NodeTypes';


const nodeTypes = {
  "textNode": TextNode,
};

let id = 0;
const getId = () => `node_${id++}`;


const MessagesFlowRender = ({nodes,
  setNodes, 
  onNodesChange, 
  setNodeEditData,
  edges,
  setEdges,
  onEdgesChange,
  setNodeEditMode,
  notificationOpen,
  setNotificationOpen,
  notificationData,
  setNotificationData,
}) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

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
        message : 'Source Handle already has an edge connected to it.',
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

      // If we add any new type of nodes, 
      // please write the logic here on what the new node data and id will look like
      let newNode
      if (type === NodeTypes?.text) {
        newNode = {
          id: getId(),
          type,
          position,
          data: { name: `Write Some Message ...` },
        };
      }

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );


  function onSelectionChange(params) {
    // console.log(params?.nodes);
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
          >
            <Background variant={BackgroundVariant.Dots} />
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
    </React.Fragment>
  );
};

export default MessagesFlowRender;
