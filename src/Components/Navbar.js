import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa";
import { CgMenu, CgClose } from "react-icons/cg";

const Header = () => {
    const [isMobile, setMobile] = useState(false);
    return (
        <nav className="navbar">
            <FaNewspaper className="svg" />
            <h1>NewsApp</h1>
            <ul className={isMobile ? "main-link-mobile" : "main-link"}>
                <li>
                    <Link to={"/"} className="nav-link">
                        General
                    </Link>
                </li>
                <li>
                    <Link to={"/business"} className="nav-link">
                        Business
                    </Link>
                </li>
                <li>
                    <Link to={"/entertainment"} className="nav-link">
                        Entertainment
                    </Link>
                </li>
                <li>
                    <Link to={"/health"} className="nav-link">
                        Health
                    </Link>
                </li>
                <li>
                    <Link to={"/science"} className="nav-link">
                        Science
                    </Link>
                </li>
                <li>
                    <Link to={"/technology"} className="nav-link">
                        Technology
                    </Link>
                </li>
                <li>
                    <Link to={"/sports"} className="nav-link">
                        Sports
                    </Link>
                </li>
            </ul>

            <button
                className="mobile-menu-icon"
                onClick={() => setMobile(!isMobile)}
            >
                {isMobile ? <CgClose /> : <CgMenu />}
            </button>
        </nav>
    );
};

export default Header;
