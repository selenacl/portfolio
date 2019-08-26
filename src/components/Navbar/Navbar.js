import React, { Component } from 'react';
import './Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {

    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="homeContainer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} >
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="aboutContainer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} >
                            About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="experienceContainer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} >
                            Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="portfolioContainer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} >
                            Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="skillsContainer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} >
                            Skills
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;