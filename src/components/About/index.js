import React from 'react';
import Profile from '../../assets/images/profilepic.jpeg'

function About() {
    return (
        <div>
            <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="profile-image">
                    <img src={require(`../../assets/images/profilepic.jpeg`)} alt="Grayscale portrait of Benjamin Molini Vilhunen" />
                </div>
                <div class="title">
                    <h2>Benjamin Molini Vilhunen <span>Portfolio</span></h2>
                </div>
            </div>
        </div>
    </section>

    <section class="about" id="about">
        <div class="container">
            <div class="section-title">
                <h3>About me</h3>
            </div>
            <div class="section-content">
                <p>
                    Creative individual with a strong, demonstrated history of over 10 years in graphic design as well as diverse experience in team leading and project management.
                </p>
            </div>
        </div>
    </section>

    <section class="work" id="work">
        <div class="container">
            <div class="section-title">
                <h3>Work</h3>
            </div>
            <div class="section-content work-section-content">

                <article class="work-item">
                    <div class="article-image">
                        <a href="https://github.com/SpencerHulse/tenantively-maybe-probably" target="__blank"><img src="./assets/images/tenantively-screenshot.png" alt="Tenantively project" /></a>
                    </div>
                    <div class="item-title">
                        <h4>Tenantive.ly</h4>
                        <h5>Bootcamp week 14 assignment</h5>
                    </div>
                </article>

                <article class="work-item">
                    <div class="article-image">
                        <a href="https://github.com/D1sl/symmetrical-robot" target="__blank"><img src="./assets/images/sourscreens-screenshot.png" alt="SourScreens project" /></a>
                    </div>
                    <div class="item-title">
                        <h4>SourScreens</h4>
                        <h5>Bootcamp week 9 assignment</h5>
                    </div>
                </article>

                <article class="work-item">
                    <div class="article-image">
                        <a href="https://hiledesign.fi/" target="__blank"><img src="./assets/images/hiledesign.jpg" alt="Hiledesign website. There is a coffee scoop and a bag closer as the hero image." /></a>
                    </div>
                    <div class="item-title">
                        <h4>Hile Design</h4>
                        <h5>Website design</h5>
                    </div>
                </article>

                <article class="work-item">
                    <div class="article-image">
                        <a href="https://www.benmolini.com/projects/cheapsleep-helsinki" target="__blank"><img src="./assets/images/cheapsleep.jpg" alt="Logo of CheapSleep Hostel on top of a frozen lake." /></a>
                    </div>
                    <div class="item-title">
                        <h4>CheapSleep Helsinki</h4>
                        <h5>Graphic Illustrations</h5>
                    </div>
                </article>

                <article class="work-item">
                    <div class="article-image">
                        <a href="https://protoweb.org/" target="__blank"><img src="./assets/images/protoweb.jpg" alt="Protoweb website. A computer displaying the Netscape website on the screen." /></a>
                    </div>
                    <div class="item-title">
                        <h4>Protoweb</h4>
                        <h5>Website design</h5>
                    </div>
                </article>
            </div>

        </div>
    </section>
        </div>
    )
}

export default About;