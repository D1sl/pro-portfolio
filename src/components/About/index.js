import React from 'react';
import '../../assets/css/waves.css';

function About() {
    return (
        <>


            <div className="wave-container">
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 80" preserveAspectRatio="none" shapeRendering="auto">
                {/* <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto"> */}
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
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


            <div className="container">
                <div className="flex">
                    <div className="main-left">
                        <h2>ben<br /><span className="highlight">molini</span></h2>
                        <p><strong>Full-Stack Web Developer</strong> based in Nashville, Tennessee</p>
                        <div className="icons">
                            <ul>
                                <a href="https://github.com/d1sl" target="_blank" rel="noreferrer">
                                    <li><img src={require(`../../assets/image/github-light.png`)} alt="Github Logo" /> Github</li>
                                </a>
                                <a href="https://www.linkedin.com/in/benjaminmolini/" target="_blank" rel="noreferrer">
                                    <li><img src={require(`../../assets/image/libug.png`)} alt="LinkedIn logo" /> LinkedIn</li>
                                </a>
                            </ul>
                        </div>

                    </div>
                    <div className="main-right">
                        <div className="main-box">
                            <h3>01 <strong>Design</strong></h3>
                            <p>I have over 10 years of experience in <strong>Graphic & Web Design</strong>, working with
                                clients from various
                                different industries.</p>
                        </div>
                        <div className="main-box">
                            <h3>02 <strong>Develop</strong></h3>
                            <p>Recent graduate of <strong>Vanderbilt</strong>'s Coding Boot Camp, I have comprehensive knowledge of both back- and front end technologies like JavaScript, MERN, SQL and more.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;