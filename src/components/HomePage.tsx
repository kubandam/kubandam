import * as React from 'react'

import '../assets/sass/HomePage.scss'
import Line1 from '../assets/svg/Line1'
import Line2 from '../assets/svg/Line2'
import Plane1 from '../assets/svg/Plane1'
import Ntb from '../assets/svg/ntb'

const HomePage = ({active}:any) => {
  var [isLoaded,changeLoad] = React.useState(false);
  React.useEffect(() => {
    const onPageLoad = () => {
      changeLoad(isLoaded = true)
    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  return (
    <div className="HomePage">
        <Line1 start={isLoaded}/>
        <Line2 start={isLoaded}/>
        <Plane1 start={isLoaded}/>
        <Ntb start={isLoaded} />
    </div>
  )
}

export default HomePage
