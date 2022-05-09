function Header(props) {
    const { setCurrentPage } = props;

    return (
        <header>
            <div className="container">
                <div className="branding">
                    <h1>Molini</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <span onClick={() => setCurrentPage("About Me")}>
                                About Me
                            </span>
                        </li>
                        <li>
                            <span onClick={() => setCurrentPage("MyWork")}>
                                Work
                            </span>
                        </li>
                        <li>
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