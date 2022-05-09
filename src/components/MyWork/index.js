function MyWork() {
    return (
        <section className="work" id="work">
        <div className="container">
            <div className="section-title">
                <h3>Work</h3>
            </div>
            <div className="section-content work-section-content">

                <article className="work-item">
                    <div className="article-image">
                        <a href="https://github.com/SpencerHulse/tenantively-maybe-probably" target="__blank"><img src={require(`../../assets/images/tenantively-screenshot.png`)} alt="Tenantively project" /></a>
                    </div>
                    <div className="item-title">
                        <h4>Tenantive.ly</h4>
                        <h5>Bootcamp week 14 assignment</h5>
                    </div>
                </article>

                <article className="work-item">
                    <div className="article-image">
                        <a href="https://github.com/D1sl/symmetrical-robot" target="__blank"><img src={require(`../../assets/images/sourscreens-screenshot.png`)} alt="SourScreens project" /></a>
                    </div>
                    <div className="item-title">
                        <h4>SourScreens</h4>
                        <h5>Bootcamp week 9 assignment</h5>
                    </div>
                </article>

                <article className="work-item">
                    <div className="article-image">
                        <a href="https://hiledesign.fi/" target="__blank"><img src={require(`../../assets/images/hiledesign.jpg`)} alt="Hiledesign website. There is a coffee scoop and a bag closer in the hero." /></a>
                    </div>
                    <div className="item-title">
                        <h4>Hile Design</h4>
                        <h5>Website design</h5>
                    </div>
                </article>

                <article className="work-item">
                    <div className="article-image">
                        <a href="https://www.benmolini.com/projects/cheapsleep-helsinki" target="__blank"><img src={require(`../../assets/images/cheapsleep.jpg`)} alt="Logo of CheapSleep Hostel on top of a frozen lake." /></a>
                    </div>
                    <div className="item-title">
                        <h4>CheapSleep Helsinki</h4>
                        <h5>Graphic Illustrations</h5>
                    </div>
                </article>

                <article className="work-item">
                    <div className="article-image">
                        <a href="https://protoweb.org/" target="__blank"><img src={require(`../../assets/images/protoweb.jpg`)} alt="Protoweb website. A computer displaying the Netscape website on the screen." /></a>
                    </div>
                    <div className="item-title">
                        <h4>Protoweb</h4>
                        <h5>Website design</h5>
                    </div>
                </article>
            </div>

        </div>
    </section>
    )
}

export default MyWork;