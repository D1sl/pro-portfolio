import { Link } from 'react-router-dom';

function Footer() {

    let address = window.location.href;

    return (
        <footer>
            <div className="container">
                {address === "https://d1sl.github.io/pro-portfolio/" ? (
                <Link to="http://benmolini-portfolio.herokuapp.com/">Visit fully functional page on Heroku</Link>
                ): (<p>© Benjamin Molini 2022</p>)}
        </div>
        </footer >
    )
}

export default Footer;