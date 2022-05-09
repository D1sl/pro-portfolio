function Header(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <header>
            <div className="container">
                <div className="branding">
                    <img src={require(`../../assets/images/molini-logo.png`)} alt="Website logo" />
                </div>
                <nav>
                    <ul>
                        <li className={`${currentPage === "About Me" && "current"}`}>
                            <span onClick={() => setCurrentPage("About Me")}>
                                About Me
                            </span>
                        </li>
                        <li className={`${currentPage === "MyWork" && "current"}`}>
                            <span onClick={() => setCurrentPage("MyWork")}>
                                Work
                            </span>
                        </li>
                        <li className={`${currentPage === "Contact" && "current"}`}>
                            <span onClick={() => setCurrentPage("Contact")}>
                                Contact
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;