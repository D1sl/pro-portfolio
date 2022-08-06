import React, { useState, useEffect } from 'react';
import { client } from '../../client';
import './resume.scss';

function Resume() {

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]'
        client.fetch(query)
            .then((data) => setExperiences(data))
    }, [])

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
            <div className='app__experiences'>
                {experiences.map((experiences, index) => (
                    <div className='app__experience-item' key={experiences.title + index}>
                        <h2>{experiences.company}</h2>
                        <p><span>{experiences.start} - {experiences.end}</span> {experiences.title}</p>
                        <p>{experiences.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Resume;