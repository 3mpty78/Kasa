import React from "react";
import { Link } from "react-router-dom";

// Import du logo
import logo from "../assets/images/LOGO.svg";

// Liens de la nav
const navLinks = [
    {
        name: "Accueil",
        path: "/",
    },
    {
        name: "A propos",
        path: "/about",
    },
];

export default function Navbar() {
    return (
        <header>
            <img src={logo} alt="Kasa's logo" />
            <nav>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link target="_top" to={link.path}>
                                {link.name}
                            </Link>
                            <div id="border"></div>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
