const Waves = () => {
    return (
        <div className="wave-container">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 80" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="20" fill="none" stroke="rgb(190, 63, 234)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="21.2" fill="none" stroke="rgb(173, 77, 236)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="22.4" fill="none" stroke="rgb(158, 89, 238)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="23.6" fill="none" stroke="rgb(146, 99, 239)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="24.8" fill="none" stroke="rgb(136, 108, 240)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="26" fill="none" stroke="rgb(127, 115, 241)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="27.2" fill="none" stroke="rgb(119, 122, 242)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="28.4" fill="none" stroke="rgb(106, 133, 243)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="29.6" fill="none" stroke="rgb(100, 137, 244)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="30.8" fill="none" stroke="rgb(95, 142, 245)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="32" fill="none" stroke="rgb(90, 146, 245, 0.7)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="33.2" fill="none" stroke="rgb(84, 150, 246)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="34.4" fill="none" stroke="rgb(78, 155, 246)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="35.6" fill="none" stroke="rgb(71, 161, 247)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="36.8" fill="none" stroke="rgb(63, 168, 248)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="38" fill="none" stroke="rgb(54, 175, 249)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="39.2" fill="none" stroke="rgb(44, 184, 250)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="40.4" fill="none" stroke="rgb(32, 194, 252)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="41.6" fill="none" stroke="rgb(17, 206, 253)" strokeWidth="0.1" />
                    <use xlinkHref="#gentle-wave" x="48" y="42.8" fill="none" stroke="rgb(0, 220, 255)" strokeWidth="0.1" />

                </g>
            </svg>
        </div>
    )
}

export default Waves;