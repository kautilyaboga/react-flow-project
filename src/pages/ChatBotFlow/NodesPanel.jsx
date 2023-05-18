import React from 'react';
import "../../index.css"
import NodeTypes from '../../Data/Constants/NodeTypes';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  console.log(NodeTypes?.text);
  return (
    <aside>
      {/* <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div> */}
      <div className="dndnode" onDragStart={(event) => onDragStart(event, NodeTypes?.text)} draggable>
        <div>
          Text Node
        </div>
      </div>
      {/* <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div> */}
    </aside>
  );
};
