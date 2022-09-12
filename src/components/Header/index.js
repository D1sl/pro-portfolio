import { NavLink } from 'react-router-dom';

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
                    <li className='menu-item'>
                        <NavLink to="/">about me</NavLink>
                    </li>
                    <li className='menu-item'>
                        <NavLink to="/work">my work</NavLink>
                    </li>
                    <li className='menu-item'>
                        <NavLink to="/resume">my resume</NavLink>
                    </li>
                    <li className='menu-item'>
                        <NavLink to="/contact">contact me</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header;