import React from "react";

class Channel extends React.Component{

    constructor(){
        super();
        this.state={
            msg:'Welcome to Neerjeet Tech '
        }
    }

    suscribe(){
        this.setState({
            msg:'Thanks for suscribing .'
        })
    }


    render(){
        return (
            <div>
         <h2>{this.state.msg}</h2>
         <button onClick={()=> {this.suscribe()}}>Suscribe.</button>

        </div>
           
        );
        
    }
}

export default Channel;