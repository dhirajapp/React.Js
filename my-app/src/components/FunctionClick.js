import React from 'react'

function FunctionClick() {

  

  function changEvent(){
    console.log("hello");
  }
  return (
    <div>
      <button onClick={changEvent}>Click Me.</button>
    </div>
  )
}

export default FunctionClick