import * as React from 'react'
import '../assets/sass/AboutMePage.scss'
import Line3 from '../assets/svg/Line3'

// @ts-ignore
import {hoverMouse} from '../assets/functions/mouse.js'
import Line4 from '../assets/svg/Line4'
import Brain from '../assets/svg/Brain'
import Ball1 from '../assets/svg/AboutMe/Ball1'

const AboutmePage = ({active}:any) => {
    var text = "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Curabitur arcu erat."
    var splitedText = text.split(" ");
    text = ""
    splitedText.forEach((ele,index) => {
        text += "<span class='hover-me' id='text"+index+"'>"+ele+"</span> "
    });
    hoverMouse()
    return(
        <div className="AboutMe">
            <div className="container">
                <div className='leftSide'>
                    <div className={active ? "title active" : "title"}>
                        <div className='blockTitle'></div>
                        <h1 className='hover-me'>Who am I</h1>
                        <div className="underTitle">
                            <span className='topLine'></span>
                            <div className='bottom'>
                                <span className='bottomLine'></span>
                                <h3 className='hover-me'>ABOUT ME</h3>
                            </div>
                        </div>
                    </div>
                    <div className={active ? "text active" : "text"} >
                        <div className='splitedText' dangerouslySetInnerHTML={{__html: text}}></div>
                    </div>
                    <div className={active ? "infoBox active" : "infoBox"} >
                        <span className='topLine'></span>
                        <span className='rightLine'></span>
                        <span className='bottomLine'></span>
                        <span className='leftLine'></span>
                        <div className="boxLine meno_adresa_title">
                            <h3>NAME</h3>
                            <h3>ADDRESS</h3>
                        </div>
                        <div className="boxLine meno_adresa_values">
                            <div className="boxLine_block"></div>
                            <h2 className='hover-me'>Martin Kubanda</h2>
                            <h2 className='hover-me'>Oscadnica 1688, 02301, Slovakia</h2>
                        </div>
                        <div className="boxLine phone_age_title">
                            <h3>PHONE</h3>
                            <h3>AGE</h3>
                        </div>
                        <div className="boxLine phone_age_values">
                            <div className="boxLine_block2"></div>
                            <h2 className='hover-me hover-under'> 
                                <a href='tel:+421 911 128 050'>
                                    +421 911 128 050
                                </a>
                            </h2>
                            <h2 className='hover-me'>23</h2>
                        </div>
                        <div className="boxLine email_experience_title">
                            <h3>EMAIL</h3>
                            <h3>EXPERIENCE</h3>
                        </div>
                        <div className="boxLine email_experience_values">
                            <div className="boxLine_block"></div>
                            <h2 className='hover-me  hover-under'>
                                <a href='mailto:m.kubanda1@gmail.com'>
                                    m.kubanda1@gmail.com
                                </a>
                            </h2>
                            <h2  className='hover-me'>4+ years</h2>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <Brain start={active} />
                </div>
            </div>
            <Line3 start={active}/>
            <Line4 start={active}/>
            <div className="ball1">
                <Ball1 start={active}/>
            </div>
        </div>
    )
}
export default AboutmePage