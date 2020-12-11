import React, { useContext } from 'react';
import { CanvasContext } from './Canvas'

const Checkbox = () => {
  const { handleClick } = useContext(CanvasContext);
  return (
    <div className="header">
      <form>
        <input type="radio" name="option" id="BST" onClick={handleClick} />
        <label htmlFor="bst">BST </label><br></br>
        <input type="radio" name="option" id="Tree" onClick={handleClick} />
        <label htmlFor="tree">Tree </label>
      </form>
    </div>
  )
};

export default Checkbox;