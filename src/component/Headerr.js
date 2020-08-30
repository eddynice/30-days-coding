import React from 'react';
import Logo  from './Logo.png';

export default function Headerr() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/home">
                     <img src={Logo} alt="logo" height="50" margin-radius="2px" />

                </a>
                <button className="narbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                 data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Clear</a>
                    </li>
                </ul>
            </div>
            </div>

        </nav>
    )
}
