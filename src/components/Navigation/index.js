import React from 'react';

function Nav() {
    return (
        <header>
        <div class="container">
            <div class="branding">
                <img src="./assets/images/molini-logo.png" alt="Molini logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Nav;