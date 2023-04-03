import React from 'react';
import './Main.css';
import Welcome from './Welcome';
import Step from './Step';
const QuizMain = ()=>{
    return(
        <>
        <div className="header">
            <div>
                <h4>QUIZ <span>Hero</span></h4>
                <span>Get Ready To Quiz And Be Amazed!</span>
             </div>
             <a href="/">Blog</a>
        </div>
            <Welcome/>
            <Step />
            

        </>
    )
}
export default QuizMain;