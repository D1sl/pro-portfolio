function MyWork() {
    return (
        <div className="container">
            <div className="row">
                <h2>my<br /><span>work</span></h2>
                <p className="desc">From Graphic Design and Branding to Web Development, this is a collection of my projects.</p>
            </div>
            <div className="row items">
                <div className="work-item">
                    <div className="work-image">
                        <img src={require(`../../assets/image/nsense-screenshot.png`)} alt="nsense project" />
                    </div>
                    <div className="work-item-details">
                        <p className="label">Vanderbilt Bootcamps Final Challenge</p>
                        <h3>n-Sense</h3>
                        <p>N-Sense is an e-commerce platform built on React, GraphQL and MongoDB. The admin user is able to create categories and add products to those categories. Users can then use the cart to select products to buy and the payment is routed through Stripe. The website is fully responsive and dark mode enabled.</p>
                        <a href="https://github.com/SpencerHulse/n-sense" className="projectbutton">View Project →</a>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-image">
                        <img src={require(`../../assets/image/tenantively-screenshot.png`)} alt="tenantively project"/>
                    </div>
                    <div className="work-item-details">
                        <p className="label">Bootcamp Week 14 Challenge</p>
                        <h3>Tenantive.ly</h3>
                        <p>Tenantive.ly allows landlords to create an account and list their properties. Users can
                            create new properties, manage them with full CRUD, and enjoy a fully responsive
                            mobile-first
                            design that demonstrates a perfect balance of visual appeal and functionality.</p>
                        <a href="https://github.com/SpencerHulse/tenantively-maybe-probably" className="projectbutton">View Project →</a>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-image">
                        <img src={require(`../../assets/image/sourscreens-screenshot.png`)} alt="sourscreens project" />
                    </div>
                    <div className="work-item-details">
                        <p className="label">Bootcamp Week 9 Challenge</p>
                        <h3>SourScreens</h3>
                        <p>This application allows users to search for specific actors or actresses by name and
                            receive
                            their worst rated movies. It uses The Movie Databse server-side API to seach for the
                            actors
                            using unique actor ids. By getting this id we were able to then access all the
                            information
                            we needed on that actor and display it in another page. This information includes their
                            profile picture, a small biography, and a list of movies that starts with those that are
                            rated worst to best.</p>
                        <a href="https://github.com/D1sl/symmetrical-robot" className="projectbutton">View Project →</a>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-image">
                        <img src={require(`../../assets/image/hiledesign.jpg`)} alt="hiledesign project" />
                    </div>
                    <div className="work-item-details">
                        <p className="label">Website Design</p>
                        <h3>Hile Design</h3>
                        <p>Complete web design project to showcase designer coffee products.</p>
                        <a href="https://hiledesign.fi/" className="projectbutton">View Project →</a>
                    </div>
                </div>
                <div className="work-item">
                    <div className="work-image">
                        <img src={require(`../../assets/image/cheapsleep.jpg`)} alt="cheapsleep project" />
                    </div>
                    <div className="work-item-details">
                        <p className="label">Graphic Illustrations</p>
                        <h3>CheapSleep Helsinki</h3>
                        <p>I was the Marketing Specialist for CheapSleep between 2016 and 2018, and my design
                            language
                            can still be observed at CheapSleep.</p>
                        <a href="https://www.cheapsleep.fi/" className="projectbutton">View Project →</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWork;