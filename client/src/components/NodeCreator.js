import React from 'react'

const NodeCreator = ({ addNode, val, setVal }) => {
  return (
    <form onSubmit={addNode} >
      <input className="node__input" type="text" placeholder="Value" value={val} onChange={e => setVal(e.target.value)} />
      {/* <button type="submit">Add Node</button> */}
    </form>
  )
}

export default NodeCreator;