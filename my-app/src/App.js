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
       <Header name="Boss" >  <p>Boss is very cool guys.</p> </Header> 

       <Header name="Dhiraj" >   <p>Dhiraj is very serious guys.</p>  </Header>
       
       <Header name="yasika" >  <p>she is very rood .</p>    </Header>
       

       <Body name="Dhiraj Kumar">  </Body>
       

       <br/>
       <Footer/>
       </div>
    
    );
  }
 }








export default App;
