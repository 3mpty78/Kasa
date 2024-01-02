import React from "react";

// Import du logo
import logo from "../assets/images/LOGO_WHITE.svg";

export default function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="Kasa's logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}
