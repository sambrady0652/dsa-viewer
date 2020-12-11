import React, { useContext, useState } from 'react';
import { CanvasContext } from './Canvas';

const Node = ({ node }) => {
  const [val, setVal] = useState("");
  const { emptyNode } = useContext(CanvasContext);

  const createNode = (value) => {
    setVal(value);
    node.val = value;
  }
  return (
    <div className="node__container">
      <button className="node__button" onClick={emptyNode}>left</button>
      <div className="node__form">
        <form>
          <input className="node__input" type="text" placeholder="Value" value={val} onChange={e => createNode(e.target.value)} />
        </form>
      </div>
      <button className="node__button" onClick={emptyNode}>right</button>
    </div>
  )
}

export default Node;
