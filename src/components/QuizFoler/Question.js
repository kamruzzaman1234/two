import React,{useState, useEffect} from 'react';
import questions from './QuizData';
import './Main.css';
import {AiOutlineFieldTime} from 'react-icons/ai';
import QuizResult from './QuizResult';




const QuestionArea = (props)=>{
    const [second, setSecond] = useState(0);
    const [minite, setMinite] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(0)
    const [currectAns, setCurrectAns] = useState(0)

var timmer;    
    useEffect(()=>{
        
       let timmer = setInterval(()=>{
            setSecond(second + 1)
            if(second === 59){
                setMinite(minite + 1)
                setSecond(0)
            }
        }, 1000)

        return()=> clearInterval(timmer)
    })
    const restart = ()=>{
        setMinite(0);
        setSecond(0)
    }
    const stop = ()=>{
        clearInterval(timmer)
    }
    const handleChange = ()=>{
       const nextQuestion = currentQuestion + 1
       if(nextQuestion < questions.length){
        setCurrentQuestion(nextQuestion)
       }else{
        setShowResult(true)
       }
    }

    const handleAns = (isCorrect)=>{
        if(isCorrect){
            setScore(score + 1)
            setCurrectAns(score + 5)
        }
    }
    return(
        <div className="question">
            <div className="question-head">
            <p><span>Attention! </span> You have 60 seconds to answer 6 questions.</p>
            <span>Please keep an eye on the timer and make sure to answer
             all questions before time runs out.</span>
            </div>
            <div className="timmer">
              
                <h2>{minite < 10 ? "0"+minite : minite} : 
                {second < 10 ? "0"+second : second} sec</h2>
                <AiOutlineFieldTime onClick={restart} className="span"/>
                <span>Time consumed</span>
            </div>
        <div>
            <h1>Question {currentQuestion + 1} of  {questions.length}</h1>
            <h3><span>{currentQuestion + 1}.</span> {questions[currentQuestion].questionName}</h3>
            <div>
                {questions[currentQuestion].questionOption.map((ans, i)=>{
                return <button className="btn"
                onClick={()=>handleAns(ans.isCorrect)} key={i}>{ans.answerText}</button>
            })}
            <div>
                <button className="btn"  
                style={{background:"crimson", marginLeft:"150%;"}} onClick={handleChange}>Next Question</button>
            </div>
        </div>
        </div>
        
        </div>
    )
}
export default QuestionArea;