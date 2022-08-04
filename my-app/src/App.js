import React from 'react'
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import {Footer} from './components/Footer';
import CfunctionClick from './components/CfunctionClick';

 
class App extends React.Component
 {

  render(){
    return ( 
      <div className='App'>
       <Header name="Boss" >  <p>Boss is very cool guys.</p> </Header> 

       <Header name="Dhiraj" >   <p>Dhiraj is very serious guys.</p>  </Header>
       
       
       <Body name="Dhiraj Kumar">  </Body>

       <Channel></Channel>
       <CfunctionClick roll="22"></CfunctionClick>

       <FunctionClick></FunctionClick>
       

       <br/>
       <Footer/>
       </div>
    
    );
  }
 }








export default App;
