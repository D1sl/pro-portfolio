import React from 'react'

function About() {
    return (
        <div>
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="profile-image">
                            <img src={require(`../../assets/images/profilepic.jpeg`)} alt="Grayscale portrait of Benjamin Molini Vilhunen" />
                        </div>
                        <div className="title">
                            <h2>Benjamin Molini Vilhunen <span>Portfolio</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container">
                    <div className="section-title">
                        <h3>About me</h3>
                    </div>
                    <div className="section-content">
                        <p>
                            Creative individual with a strong, demonstrated history of over 10 years in graphic design as well as diverse experience in team leading and project management.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;