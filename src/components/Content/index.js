import About from '../About'
import MyWork from '../MyWork'
import Resume from '../Resume'

function Content(props) {
    const { currentPage } = props;

    return (
        <>
            {currentPage === "About Me" && <About />}
            {currentPage === "MyWork" && <MyWork />}
            {currentPage === "Resume" && <Resume />}
        </>
    )
}

export default Content;