import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import svg flèche
import arrow from "../assets/images/arrow.svg";

export default function Appartement({
    pictures,
    title,
    location,
    host,
    tags,
    rating,
}) {
    const [imageDisplayed, setImageDisplayed] = useState(0);

    return (
        <>
            <Navbar />
            <main id="apartment">
                <section className="carousel">
                    <img className="arrow left" src={arrow} alt="Left arrow" />
                    <img
                        className="arrow right"
                        src={arrow}
                        alt="Right arrow"
                    />

                    {/* Création du carousel */}

                    {pictures.map((image, index) => (
                        <figure key={index}>
                            <img
                                src={image}
                                alt={`Preview image number ${index + 1}`}
                            />
                            <figcaption>
                                {`${index + 1}/` + pictures.length}
                            </figcaption>
                        </figure>
                    ))}
                </section>

                {/* Création des infos de l'appart */}

                <section className="infos">
                    <div className="infos__titleAndName">
                        <div className="infos__titleAndLocation">
                            <h3>{title}</h3>
                            <p>{location}</p>
                        </div>
                        <div className="infos__nameAndPic">
                            <p>{host.name}</p>
                            <img
                                src={host.picture}
                                alt={`${host.name}'s picture`}
                            />
                        </div>
                    </div>
                    <div className="infos__tagsAndRating">
                        <div className="tags">
                            {tags.map((tag, index) => (
                                <p key={index}>{tag}</p>
                            ))}
                        </div>
                        <div className="rating">
                            <p>{rating}/5</p>
                        </div>
                    </div>
                </section>

                {/* Création des dropdowns */}
            </main>
            <Footer />
        </>
    );
}
