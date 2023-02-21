function Line3(props: any) {
    return (
        <svg id="line3" className={props.start ? 'active' : ''}  width="3595" height="500" viewBox="0 0 3595 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.39796 498.17L261.75 380.08C427.636 315.783 520.237 283.27 749.78 256.984C980.588 224.636 1302.4 283.412 1531.97 238.643C1761.53 193.874 1979.11 113.831 2207.43 56.641C2435.75 -0.548579 2622.27 -15.7996 2860.54 26.375C3098.81 68.5496 3275.76 164.822 3348.18 221.495L3592.93 392.222" stroke="url(#paint0_radial_30_24)" stroke-width="4"/>
            <defs>
                <radialGradient id="paint0_radial_30_24" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(421.59 459.452) rotate(-4.90837) scale(3074.92 799.163)">
                <stop stop-color="#423A9C"/>
                <stop offset="0.09375" stop-color="#5746A5"/>
                <stop offset="0.375" stop-color="#7E43A6"/>
                <stop offset="0.697917" stop-color="#FF7F83"/>
                </radialGradient>
            </defs>
        </svg>
    )
}
export default Line3
