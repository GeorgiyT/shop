import React from 'react'


const Header = () => {
    return (
        <header>
            <a href="/">Shop Sharik</a>
            <nav>
                <ul className="list">
                    <li className="listItem"><a href="/" className="link">Home</a></li>
                    <li className="listItem"><a href="/Products" className="link">Products</a></li>
                    <li className="listItem"><a href="/Admin" className="link">Admin</a></li>
                    <li className="listItem"><a href="/Registration" className="link">Registration</a></li>
                    <li className="listItem"><a href="/Login" className="link">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;