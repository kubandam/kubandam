function Line1(props: any) {
    return (
        <svg id="line1" className={props.start ? 'active' : ''} width="1920" height="681" viewBox="0 0 1920 681" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-74.8811 678.135C-17.7525 678.135 50.8593 434.915 192.825 364.837C338.734 294.759 447.164 292.645 593.073 257.606C735.038 222.567 917.537 93.0608 1063.45 -12.056C1205.41 -117.173 1331.08 -12.4037 1476.99 22.6352C1618.96 57.6742 1796.8 27.3696 1942.71 -7.66935" stroke="url(#paint0_radial_7_5)" strokeWidth="4"/>
            <defs>
            <radialGradient id="paint0_radial_7_5" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.0582 621.081) scale(1844.08 1183.12)">
            <stop stopColor="#FF7F83"/>
            <stop offset="0.474206" stopColor="#7E43A6"/>
            <stop offset="0.72619" stopColor="#5746A5"/>
            <stop offset="1" stopColor="#423A9C"/>
            </radialGradient>
            </defs>
        </svg>
    )
}
export default Line1
