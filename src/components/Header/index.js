import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <div className="container">
                <div className="brand">
                    <h1>molini</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li className='menu-item'>
                            <NavLink to="/pro-portfolio/">about me</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink to="/pro-portfolio/work">my work</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink to="/pro-portfolio/resume">my resume</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink to="/pro-portfolio/contact">contact me</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;