import React from "react";

class CfunctionClick extends React.Component{

    constructor(props){
        super(props);
        //this.changEvent=this.changEvent.bind(this);

        this.state={
            course:"MCA",
            roll:this.props.roll
        }
        
      }
    
    changEvent= () =>{

        this.setState=({
            course:"BCA"
        })

        console.log("hello",this.state.course);
        console.log("hello",this.state.roll);
      }

    


    render(){
        return (
            <div>
        <button onClick={this.changEvent}>Click Me.</button>
          {this.state.course}
          {this.props.roll}
        </div>
        
           
        );
        
    }
}

export default CfunctionClick;