import React,{useState} from 'react';
import './About.css';

const About = ()=>{
    const [toggle, setToggle] = useState(true)
    return(
      <div>
        <h3 style={{margin:"1rem 0", textAlign:"center"}}>My Skill</h3>
        <div className="about-intro">
            Text-align
            <div className="about-left">
              <div>
             
             {toggle && ( <p style={{textAlign:'justify'}}>HTML meaning Hyper text markup language.
                It make web site and HTML meaning Hyper text markup language.
                It make web site and HTML meaning Hyper text markup language.
                It make web site and HTML meaning Hyper text markup language.
                It make web site and 
              </p>)}
              <button className="skill" onClick={()=>{setToggle(!toggle)}}>
                {toggle ? 'HIDE' : 'HTMl'}
              </button>
              </div>
              <div>
              <span className="skill">Css</span>
              </div>
              <div>
              <span className="skill">Css</span>
              </div>
              <div>
              <span className="skill">Css</span>
              </div>
              <div>
              <span className="skill">Css</span>
              </div>
            </div>
            <div className="about-right">
              <div className="single-feature">
                <div className="feature-image">
                  <img src="img/feature.jpg" alt="Image"/>
                </div>
                <div className="feature-content">
                    <div className="icon">
                      <h3>Conversation</h3>
                    </div>
                    <p>Loream ispum dollar sit amet and the loream ispum and the last message
                      for the most important and the last organaization for the power and 
                      the customaization for the welcome and the last for the organization
                    </p>
                    <button className="button i-button">Read More</button>
                </div>
              </div>
              <div className="single-feature">
                <div className="feature-image">
                  <img src="img/feature.jpg" alt="Image"/>
                </div>
                <div className="feature-content">
                    <div className="icon">
                      <h3>Conversation</h3>
                    </div>
                    <p>Loream ispum dollar sit amet and the loream ispum and the last message
                      for the most important and the last organaization for the power and 
                      the customaization for the welcome and the last for the organization
                    </p>
                    <button className="button i-button">Read More</button>
                </div>
              </div>
              <div className="single-feature">
                <div className="feature-image">
                  <img src="img/feature.jpg" alt="Image"/>
                </div>
                <div className="feature-content">
                    <div className="icon">
                      <h3>Conversation</h3>
                    </div>
                    <p>Loream ispum dollar sit amet and the loream ispum and the last message
                      for the most important and the last organaization for the power and 
                      the customaization for the welcome and the last for the organization
                    </p>
                    <button className="button i-button">Read More</button>
                </div>
              </div>
            </div>
        </div>
        <div className="one"></div>
        <div className="one1"></div>
        <div className="two"></div>
        <div className="two1"></div>
        <div className="red">
       </div>

        </div>
    )
}
export default About;