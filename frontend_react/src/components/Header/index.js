function Header(props) {
    const { currentPage, setCurrentPage } = props;

    return (

        <nav>
        <div className="container">
            <div className="brand">
                <h1>molini</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><button onClick={() => setCurrentPage("About Me")}>about me</button>
                        <div className={`${currentPage === "About Me" && "menu-selected-visible"}`}></div>
                    </li>
                    <li><button onClick={() => setCurrentPage("MyWork")}>my work</button>
                        <div className={`${currentPage === "MyWork" && "menu-selected-visible"}`}></div>
                    </li>
                    <li><button onClick={() => setCurrentPage("Resume")}>my resume</button>
                        <div className={`${currentPage === "Resume" && "menu-selected-visible"}`}></div>
                    </li>
                    <li><button onClick={() => setCurrentPage("Contact")}>contact</button>
                        <div className={`${currentPage === "Contact" && "menu-selected-visible"}`}></div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header;