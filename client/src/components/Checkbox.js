import React from 'react';

const Checkbox = ({ handleClick }) => {
  return (
    <form>
      <input type="radio" name="option" id="BST" onClick={handleClick} />
      <label htmlFor="bst">BST </label><br></br>
      <input type="radio" name="option" id="Tree" onClick={handleClick} />
      <label htmlFor="tree">Tree </label>
    </form>
  )
};

export default Checkbox;