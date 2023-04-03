import React from 'react';
 import './Main.css';
const Welcome = ()=>{
    return(
        <div className="welcome">
            <h3>Welcome to our Quiz</h3>
            <div className="rules">
                <h3>Quiz Rules:</h3>
   <span> Please read all the rules and steps before start. </span>
            </div>
        </div>
    )
}
export default Welcome;