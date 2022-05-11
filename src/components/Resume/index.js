import React from 'react'

function Resume() {
    return (
        <div className="container">
            <div className="row">
                <h2>my<br /><span>resume</span></h2>
                <p className='resdesc'><strong>Front-End</strong> | HTML, CSS, JavaScript, jQuery, Bootstrap, React, Responsive Design</p>
                <p className='resdesc'><strong>Back-End</strong> | Node.js, Express.js, REST, SQL, MongoDB</p>
            </div>
            <a className='downloadbutton' href='./assets/downloads/resume.pdf' download={"resume.pdf"}>
                <div><img src={require(`../../assets/image/dl.png`)} alt='' /></div>
                <div>
                <h2>Download full resume</h2>
                <p>PDF | 511 kb</p>
                </div>
            </a>
        </div>
    )
}

export default Resume;