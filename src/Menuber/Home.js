import React from 'react';
import './Home.css';
import Circle from './Circle';

const Home = ()=>{
    return(
        <div>
       <div className="h-intro">
            <div className="h-left">
                <div className="left-name">
                    <span>Hey! I am</span>
                    <span>Labib</span>
                    <span>I am a frontend designer.I skill will be most popular for the
                        web site.Then I will make a robotic for the country.
                        I am a frontend designer.I skill will be most popular for the
                        web site.Then I will make a robotic for the country.
                        I am a frontend designer.I skill will be most popular for the
                        web site.Then I will make a robotic for the country.
                    </span>
                </div>
                <button className="button i-button">Hire Me</button>
        </div>
        <div className="h-right">
            <div className="right-person">
                <div className="r-one">
                    <h3>Our Landing Page</h3>
                    <p>Our page is very important and he is very smallar and the 
                        good corporation and the last message for the last target
                    </p>
                    <button className="button i-button">Download CV</button>
                </div>
            </div>
        </div>
        </div>
        <Circle />
        </div>
    );
}
export default Home;