import React, {useState} from 'react';
import './Main.css';
import QuestionArea from './Question';
const Step = ()=>{
    const handleClick = ()=>{
        setShowResult(false)
    }
    const [showResult, setShowResult] = useState(true)
    return(
        <>
        {showResult ? (<div className="step">
            <div className="serial">
            <a href="/">Step : 1</a>
            <span> Click on the Start Quiz button below.</span>
            </div>
            <div className="serial">
            <a href="/">Step : 2</a>
            <span> After clicking Start button, you will see a page with 3s count 
                down, wait until the count is over!</span>
            </div>
            <div className="serial">
            <a href="/">Step : 3</a>
            <span> ou will see the questions with 4 options for each, and counter
                 will start and which will count your exam time.</span>
            </div>
            <div className="serial">
            <a href="/">Step : 4</a>
            <span> You have to select the correct answer,
                 and you have 60 seconds to answer 6 questions.</span>
            </div>
            <div className="serial">
            <a href="/">Step : 5</a>
            <span> Click on the submit quiz button, when you are done with all the answers.</span>
            </div>
            </div>) : (<QuestionArea setShowResult={setShowResult}/>)}


        


            <div className="btn-area">
            <button className="btn" onClick={()=>setShowResult(!showResult)}>
                {showResult ? "Start Quiz" : "Play Again"}
            </button>
            </div>
            
        
        </>
    )
}
export default Step;