
import * as React from 'react'
import plane1_animation from './plane1_animation.svg'

function Plane1(props: any) {
    var [showPlane,changeShowPlane] = React.useState(false)
    React.useEffect(() => {
        const onPageLoad = () => {
            setTimeout(() => {
                changeShowPlane(showPlane = true)
            }, 3000);
        };
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);
    return (
        <object id="plane1"  className={showPlane ? 'active' : ''} type="image/svg+xml" data={plane1_animation}>
        </object>
    )
}
export default Plane1
