import * as React from 'react'
import './assets/sass/App.scss'

// @ts-ignore
import HomePage from './components/HomePage'
import AboutmePage from './components/AboutmePage'
import ReactFullpage from '@fullpage/react-fullpage'
import SkillsPage from './components/SkillsPage'


const App = () => {
  var [aboutmeActive, changeAboutme] = React.useState(false)
  var [skillsActive, changeSkills] = React.useState(false)
  return (
    <div className="App">
      <ReactFullpage
        scrollingSpeed = {1000}
        afterLoad = {(origin, destination, direction) => {
          if(destination.index == 1)
            changeAboutme(aboutmeActive = true)
          if(destination.index == 2)
            changeSkills(skillsActive = true)
        }}
        render={(fullpageApi:any) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HomePage  />
              </div>
              <div className="section">
                <AboutmePage active={aboutmeActive}/>
              </div>
              <div className="section">
                <SkillsPage active={skillsActive} />
              </div>
            </ReactFullpage.Wrapper>
      );
    }}
  />
    </div>
  )
}

export default App
