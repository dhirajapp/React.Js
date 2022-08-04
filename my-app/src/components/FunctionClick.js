import React from 'react'

function FunctionClick() {

  

  function changEvent(m){
   m.preventDefault();
    console.log("hello");
  }
  return (
    <div>
      <a href="https://dhirajapp.github.io/" onClick={changEvent} >Click</a>
    </div>
  )
}

export default FunctionClick