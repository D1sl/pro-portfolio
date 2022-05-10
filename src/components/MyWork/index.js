function MyWork() {
    return (
        <div className="container">
                <div className="row">
                    <h2>work</h2>
                </div>
                <div className="row items">
                    <div className="work-item">
                        <div className="work-image">
                            <img src={require(`../../assets/image/tenantively-screenshot.png`)} />
                        </div>
                        <div className="work-item-details">
                            <p className="label">Bootcamp Week 14 Challenge</p>
                            <h3>Tenantive.ly</h3>
                            <p>Tenantive.ly allows landlords to create an account and list their properties. Users can
                                create new properties, manage them with full CRUD, and enjoy a fully responsive
                                mobile-first
                                design that demonstrates a perfect balance of visual appeal and functionality.</p>
                            <a href="#" className="projectbutton">View Project →</a>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-image">
                            <img src={require(`../../assets/image/sourscreens-screenshot.png`)} />
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
                            <a href="#" className="projectbutton">View Project →</a>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-image">
                            <img src={require(`../../assets/image/hiledesign.jpg`)} />
                        </div>
                        <div className="work-item-details">
                            <p className="label">Website Design</p>
                            <h3>Hile Design</h3>
                            <p>Complete web design project to showcase designer coffee products.</p>
                            <a href="#" className="projectbutton">View Project →</a>
                        </div>
                    </div>
                    <div className="work-item">
                        <div className="work-image">
                            <img src={require(`../../assets/image/cheapsleep.jpg`)} />
                        </div>
                        <div className="work-item-details">
                            <p className="label">Graphic Illustrations</p>
                            <h3>CheapSleep Helsinki</h3>
                            <p>I was the Marketing Specialist for CheapSleep between 2016 and 2018, and my design
                                language
                                can still be observed at CheapSleep.</p>
                            <a href="#" className="projectbutton">View Project →</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MyWork;