import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dropdown from "./Dropdown";

// Import svg flèche et étoiles
import redStar from "../assets/images/star-active.svg";
import grayStar from "../assets/images/star-inactive.svg";
import Carousel from "./Carousel";

export default function Appartement({
    pictures,
    title,
    location,
    host,
    tags,
    rating,
    description,
    equipments,
}) {
    const ratingNumber = parseInt(rating);

    const stars = Array.from({ length: 5 }, (_, index) => {
        let starColor;

        if (index < ratingNumber) {
            starColor = "red";
        } else {
            starColor = "gray";
        }

        let starSvg;
        switch (starColor) {
            case "red":
                starSvg = redStar;
                break;
            case "gray":
                starSvg = grayStar;
                break;
            default:
                starSvg = grayStar;
        }

        return (
            <span
                key={index}
                className={index < ratingNumber ? "star active" : "star"}>
                <img src={starSvg} alt={`Star ${index + 1}`} />
            </span>
        );
    });

    return (
        <div className="apartmentContainer">
            <main id="apartment">
                <Navbar />
                <Carousel pictures={pictures} />
                {/* CREATION DES INFOS */}

                <section className="infos">
                    <div className="infos__titleAndTags">
                        <div className="titleAndLocation">
                            <h3>{title}</h3>
                            <p>{location}</p>
                        </div>
                        <div className="tags">
                            {tags.map((tag, index) => (
                                <p key={index}>{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className="infos__nameAndRating">
                        <div className="rating">{stars}</div>
                        <div className="nameAndPic">
                            <p>{host.name}</p>
                            <img
                                src={host.picture}
                                alt={`${host.name}'s picture`}
                            />
                        </div>
                    </div>
                </section>

                {/* FIN DES INFOS */}
                {/* AFFICHAGE DES DROPDOWNS */}
                <section className="dropdownContainer">
                    <Dropdown title={"Description"} options={description} />
                    <Dropdown title={"Équipements"} options={equipments} />
                </section>

                {/* FIN DES DROPDOWNS */}
            </main>
            <Footer />
        </div>
    );
}
