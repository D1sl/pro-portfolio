import { useState } from "react";

function Contact() {
    const [contactFormState, setContactFormState] = useState({
        subject: "",
        name: "",
        message: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div className="container">
        <div className="row">
            <h2>contact<br /><span>me</span></h2>
            <p className="desc">To get into contact with me, fill out the form below!</p>
        </div>
        <a className='downloadbutton' href='../../assets/downloads/resume.pdf' download>
            <div>
                hello
            </div>
        </a>
    </div>        
    )
}

export default Contact;