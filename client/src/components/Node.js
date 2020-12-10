import React from 'react';
import NodeCreator from './NodeCreator';

const Node = () => {
  return (
    <div className="node__container">

      <button className="node__button"><i className="fas fa-thumbs-up" /></button>
      <div className="node__form">
        <NodeCreator />
      </div>
      <button className="node__button">right</button>
    </div>
  )
}

export default Node;
