import React, { useState } from 'react';

const Checkbox = () => {
  const [selection, setSelection] = useState("");


  const handleClick = (e) => {
    setSelection(e.target.id)
    console.log(selection);
  }

  return (
    <>
      <h1>checkbox</h1>
      <form>
        <input type="radio" name="option" id="BST" onClick={handleClick} />
        <label htmlFor="bst">BST </label><br></br>
        <input type="radio" name="option" id="Tree" onClick={handleClick} />
        <label htmlFor="tree">Tree </label>
      </form>
    </>
  )
};

export default Checkbox;