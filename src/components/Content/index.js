import About from '../About'
import MyWork from '../MyWork'
import Contact from '../Contact'

function Content(props) {
    const { currentPage } = props;

    return (
        <>
            {currentPage === "About Me" && <About />}
            {currentPage === "MyWork" && <MyWork />}
            {currentPage === "Contact" && <Contact />}
        </>
    )
}

export default Content;