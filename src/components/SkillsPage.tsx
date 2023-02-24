import * as React from 'react'
import '../assets/sass/SkillsPage.scss'
// @ts-ignore
import {hoverMouse} from '../assets/functions/mouse.js'
import Line5 from '../assets/svg/Skills/Line5'
import Table from '../assets/svg/Skills/Table'

const SkillsPage = ({active}:any) => {
var text = "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Curabitur arcu erat."
var splitedText = text.split(" ");
text = ""
splitedText.forEach((ele,index) => {
    text += "<span class='hover-me' id='text"+index+"'>"+ele+"</span> "
});
hoverMouse()
return(
    <div className="Skills">
        <div className="container">
            <div className="leftSide">
                <div className={active ? "title active" : "title"}>
                    <div className='blockTitle'></div>
                    <h1 className='hover-me'>What I know</h1>
                    <div className="underTitle">
                        <span className='topLine'></span>
                        <div className='bottom'>
                            <span className='bottomLine'></span>
                            <h3 className='hover-me'>MY SKILLS</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <Table start={active}/>
            </div>
        </div>
        <Line5 start={active}/>
    </div>
)
}
export default SkillsPage