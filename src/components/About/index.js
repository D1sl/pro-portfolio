import React from 'react'

function About() {
    return (
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
    )
}

export default About;