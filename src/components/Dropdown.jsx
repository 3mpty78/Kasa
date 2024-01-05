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
                <img
                    style={
                        isOpen
                            ? { transform: "rotate(-90deg)" }
                            : { transform: "rotate(90deg)" }
                    }
                    src={icon}
                    alt="Toggle dropdown icon"
                />
            </div>

            <div className="dropdown__contentContainer">
                <div
                    style={
                        !isOpen
                            ? {
                                  transform: "translateY(-100%)",
                              }
                            : {
                                  transform: "translateY(0)",
                              }
                    }
                    className="content">
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
            </div>
        </div>
    );
}
