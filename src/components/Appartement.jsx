import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import svg flèche
import arrow from "../assets/images/arrow.svg";
import Dropdown from "./Dropdown";

export default function Appartement({
    id,
    pictures,
    title,
    location,
    host,
    tags,
    rating,
    description,
    equipments,
}) {
    return (
        <>
            <Navbar />
            <main id="apartment">
                {/* CREACTION DU CAROUSEL */}

                <section className="carousel">
                    <img className="arrow left" src={arrow} alt="Left arrow" />
                    <img
                        className="arrow right"
                        src={arrow}
                        alt="Right arrow"
                    />

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

                {/* FIN DU CAROUSEL */}
                {/* CREATION DES INFOS */}

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

                {/* FIN DES INFOS */}
                {/* AFFICHAGE DES DROPDOWNS */}

                <Dropdown title={"Description"} options={description} />
                <Dropdown title={"Équipements"} options={equipments} />

                {/* FIN DES DROPDOWNS */}
            </main>
            <Footer />
        </>
    );
}
