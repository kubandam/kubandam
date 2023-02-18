import { useState } from 'react'
import './assets/sass/App.scss'

// @ts-ignore
import HomePage from './components/HomePage'
import ReactFullpage from '@fullpage/react-fullpage'


const App = () => {
  return (
    <div className="App">
      <ReactFullpage
        scrollingSpeed = {1000}
        render={(fullpageApi:any) => {
          return (
            <ReactFullpage.Wrapper>-
              <div className="section">
                <HomePage  />
              </div>
              <div className="section">
                section2
              </div>
            </ReactFullpage.Wrapper>
      );
    }}
  />
    </div>
  )
}

export default App
