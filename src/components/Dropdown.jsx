import React, { useState } from "react";

// Import de l'icon du toggle
import icon from "../assets/images/arrow.svg";

export default function Dropdown({ title, options }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div onClick={toggleDropdown} className="dropdown__title">
                <p>{title}</p>
                <img src={icon} alt="Toggle dropdown icon" />
            </div>
            {isOpen && (
                <div className="dropdown__content">
                    {Array.isArray(options) ? (
                        <ul>
                            {options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{options}</p>
                    )}
                </div>
            )}
        </div>
    );
}
