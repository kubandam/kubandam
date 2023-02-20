import * as React from 'react'
import $ from 'jquery';
import 'animate.css';
import '../assets/sass/HomePage.scss'
import Line1 from '../assets/svg/Line1'
import Line2 from '../assets/svg/Line2'
import Plane1 from '../assets/svg/Plane1'
import Ntb from '../assets/svg/Ntb'
import MainTitle from '../assets/text/MainTitle';

// @ts-ignore
import {hoverMouse} from '../assets/functions/mouse.js'

const HomePage = ({active}:any) => {
  var [isLoaded,changeLoad] = React.useState(false);
  var [menuLoad, changeMenu] = React.useState(false);
  var [mainTitle, changeTitle] = React.useState(false)
  React.useEffect(() => {
    const changeText = () => {
      const intervalId = setInterval(() => {
        changeTitle(mainTitle = !mainTitle);
      }, 4000);
      return () => clearInterval(intervalId);
    }
    const onPageLoad = () => {
      changeLoad(isLoaded = true)
      setTimeout(() => {
        changeText()
      }, 4000);
      hoverMouse()
    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  const handleClick = () => {
    changeMenu(menuLoad = !menuLoad)
  };
  return (
    <div className="HomePage">
        <div className="container">
          <div className={ isLoaded ? "header active " : "header"}>
            <div className="title">
              <div className='blockTitle'></div>
              <a href="#" >
                <h1 className='hover-me'>kubanda.m</h1>
              </a>
            </div>
            <label className="burger">
              <div className="blockBurger"></div>
              <input type="checkbox" defaultChecked={menuLoad ? true : false}/>
              <div className="checkmark"  onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </label>
          </div>
          <div className={ isLoaded ? "homeSection active " : "homeSection"}>
            <div className="mainTitle">
              <div className="mainTitleBlock"></div>
                <h1>
                  HELLO, I’M <br />
                  <MainTitle textType={mainTitle} />
                </h1>
                <span className='longer'></span>
                <span className='shorter'></span>
            </div>
          </div>
        </div>
        <Line1 start={isLoaded}/>
        <Line2 start={isLoaded}/>
        <Plane1 start={isLoaded}/>
        <Ntb start={isLoaded} />
    </div>
  )
}

export default HomePage
