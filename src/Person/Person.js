import React from "react"


const person = (props) => {
    return ( 
        <div>
            <p>Adisa don start React no sleep for the wicked! and  
         {props.name} is {props.age} in his first life</p>
            <p>{props.children}</p>
         </div>
        )
};

export default person