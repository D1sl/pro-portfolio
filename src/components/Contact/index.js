import { useState } from "react";

function Contact() {
    const [contactFormState, setContactFormState] = useState({
        name: "",
        subject: "",
        message: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const { name, subject, message } = contactFormState;

    function handleChage(e) {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage("");
        }
        if (!errorMessage) {
            setContactFormState({ ...contactFormState, [e.target.name]: e.target.value });
        }
    }

    return (
        <div className="container">
        <div className="row">
            <h2>contact<br /><span>me</span></h2>
            <p className="desc">To get into contact with me, fill out the form below!</p>
        </div>
            <div className="contactform">
                <form id="contact">
                    <div className="form">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChage} />
                        </div>
                        <div>
                            <label htmlFor="subject">subject</label>
                            <input type="subject" name="subject" defaultValue={subject} onBlur={handleChage} />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" rows="7" defaultValue={message} onBlur={handleChage} />
                        </div>
                    </div>
                </form>
            </div>
    </div>        
    )
}

export default Contact;