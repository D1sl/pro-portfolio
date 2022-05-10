import React from 'react'

function Resume() {
    return (
        <div className="container">
            <div className="row">
                <h2>my<br /><span>resume</span></h2>
                <p className='resdesc'><strong>Front-End</strong> | HTML, CSS, JavaScript</p>
                <p className='resdesc'><strong>Back-End</strong> | JavaScript, Node.js, Express.js</p>
            </div>
            <div className='downloadbutton'>
                <div><img src={require(`../../assets/image/dl.png`)} /></div>
                <div>
                <h2>Download full resume</h2>
                <p>PDF | 2.13 MB</p>
                </div>
            </div>
        </div>
    )
}

export default Resume;