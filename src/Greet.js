import React from 'react';

const Greet = (props)=>{
    return (
      <div>
            <h1> Hello there {props.name} Surname is {props.surname} | More info {props.children}</h1>
            
        </div>

    )
   
}

export default Greet;