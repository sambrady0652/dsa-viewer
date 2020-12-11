import React, { createContext, useState } from 'react';
import Checkbox from './Checkbox';
import TreeNode from '../TreeNode';
import Node from './Node';

export const CanvasContext = createContext();

const Canvas = () => {
  const [selection, setSelection] = useState("");
  const [nodes, setNodes] = useState([new TreeNode(null)]);

  const handleClick = (e) => {
    setSelection(e.target.id)
  }

  const emptyNode = (e) => {
    setNodes([...nodes, new TreeNode(null)]);
  }

  return (
    <>
      <CanvasContext.Provider value={{ handleClick, emptyNode, nodes }}>
        <Checkbox />
        {nodes.map(node => <Node node={node} />)}
      </CanvasContext.Provider>
    </>
  )
}

export default Canvas;