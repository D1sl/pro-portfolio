import About from '../About'
import MyWork from '../MyWork'
import Resume from '../Resume'
import Contact from '../Contact'

function Content(props) {
    const { currentPage } = props;

    return (
        <>
            {currentPage === "About Me" && <About />}
            {currentPage === "MyWork" && <MyWork />}
            {currentPage === "Resume" && <Resume />}
            {currentPage === "Contact" && <Contact />}
        </>
    )
}

export default Content;