import React, { useState } from 'react';

import Checkbox from './Checkbox';
import Node from './Node';
import TreeNode from '../TreeNode';

const Canvas = () => {
  const [selection, setSelection] = useState("");
  const [nodes, setNodes] = useState([]);
  const [val, setVal] = useState("");

  const handleClick = (e) => {
    setSelection(e.target.id)
  }

  const addNode = (e) => {
    e.preventDefault();
    const newNode = new TreeNode(val);
    setNodes([...nodes, newNode]);
  }

  return (
    <>
      <div className="header">
        <Checkbox handleClick={handleClick} />
      </div>
      {/* {nodes.map(node => <Node node={node} addNode={addNode} val={val} setVal={setVal} />)} */}
      <Node />
    </>
  )
}


export default Canvas;