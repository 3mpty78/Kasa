import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Import de l'image de bannière
import beach from "../assets/images/beach.png";

// Import du JSON
import data from "../assets/logements.json";
import Footer from "../components/Footer";

export default function Homepage() {
    return (
        <>
            <main id="home">
                <Navbar />
                <div className="imageContainer">
                    <img src={beach} alt="Beach landscape banner image" />
                    <p>Chez vous, partout et ailleurs</p>
                </div>
                <section className="logements">
                    {data.map((appartement, index) => (
                        <Link
                            className="logements__item"
                            key={index}
                            to={`/apartment/${appartement.id}`}>
                            <img
                                src={appartement.cover}
                                alt={`${appartement.title}'s cover picture`}
                            />
                            <p>{appartement.title}</p>
                        </Link>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
}
