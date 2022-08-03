import React from "react";

const Header= (props) =>{
    return( 
        <div>
    <h1>Hello {props.name}.
    Functional ComponentsS has been ready .</h1>
    {props.children}

    </div>
    
    );          
}


export default Header;