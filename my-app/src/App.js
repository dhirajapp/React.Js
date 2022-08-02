import React from 'react'
import './App.css';
// example of jsx 
const name=<span>Dhiraj</span>;
var age=<span>23</span>;
const profile=<span>Full Stack Developer.</span>;


// example of core React Syntax.
const newElement = React.createElement('h3',{className:'newElement'},'hello Guys. I am here.');

// Components: React has a component based architecture.
 //  This lets you break down your application into small encapsulated parts which can then be composed to make more complex UI.

 // Two types of Components in React 
 // 1. Functional Components .
 // 2. Class Components .


 //example of function components
 
function App() {
  return (

    <div className="App">
      <h1>Hello {name} Boss.</h1>
      <h2>I am {age} Year old .</h2>
      {profile}
      {newElement}

    </div>
  );
}




//



export default App;
