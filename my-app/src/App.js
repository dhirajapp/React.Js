import React from 'react'
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {Footer} from './components/Footer';

 
class App extends React.Component
 {

  render(){
    return ( 
      <div className='App'>
       <Header/>
       <br/>
       <Body/>
       <br/>

       <br/>
       <Footer/>
       </div>
    
    );
  }
 }








export default App;
