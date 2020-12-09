import React, { useState } from 'react';

import Checkbox from './Checkbox';
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
    console.log([...nodes, newNode]);
  }

  return (
    <div>
      <Checkbox handleClick={handleClick} />
      <form onSubmit={addNode}>
        <input type="text" placeholder="value" value={val} onChange={e => setVal(e.target.value)} />
        <button type="submit">Add Node</button>
      </form>
      <h1>{selection}</h1>
    </div>
  )
}


export default Canvas;