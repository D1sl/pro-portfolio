import React from 'react'

function About() {
    return (
        <div className="container">
            <div className="flex">
                <div className="main-left">
                    <h2>ben<br /><span className="highlight">molini</span></h2>
                    <p><strong>Full-Stack Web Developer</strong> based in Nashville, Tennessee</p>
                    <a href="#">
                        <div className="link">
                            <p>know more</p>
                            <img src={require(`../../assets/image/main-arrow.png`)} alt="arrow pointing right" />
                        </div>
                    </a>
                    <div className="icons">
                        <ul>
                            <a href="https://github.com/d1sl" target="_blank">
                                <li><img src={require(`../../assets/image/github-light.png`)} /> Github</li>
                            </a>
                            <a href="https://www.linkedin.com/in/benjaminmolini/" target="_blank">
                                <li><img src={require(`../../assets/image/libug.png`)} /> LinkedIn</li>
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
                        <p>Recently graduated from <strong>Vanderbilt Boot Camps</strong>, I am a skilled
                            <strong>Full-Stack Web Developer</strong> with skills to work with JavaScript, MERN, SQL
                            and more.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;