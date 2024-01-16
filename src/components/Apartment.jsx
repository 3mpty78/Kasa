import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Dropdown from "./Dropdown";

// Import svg flèche et étoiles
import arrow from "../assets/images/arrow.svg";
import redStar from "../assets/images/star-active.svg";
import grayStar from "../assets/images/star-inactive.svg";

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
    const [currentIndex, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((previousIndex) =>
            previousIndex === pictures.length - 1 ? 0 : previousIndex + 1
        );
    };

    const previousSlide = () => {
        setIndex((previousIndex) =>
            previousIndex === 0 ? pictures.length - 1 : previousIndex - 1
        );
    };

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
                {/* CREACTION DU CAROUSEL */}

                <section className="carousel">
                    <div className="arrows">
                        <img
                            onClick={previousSlide}
                            className="arrow left"
                            src={arrow}
                            alt="Left arrow"
                        />
                        <img
                            onClick={nextSlide}
                            className="arrow right"
                            src={arrow}
                            alt="Right arrow"
                        />
                    </div>

                    {pictures.map((image, index) => (
                        <figure
                            key={index}
                            style={{
                                display:
                                    index === currentIndex ? "block" : "none",
                            }}>
                            <img
                                src={image}
                                alt={`Preview image number ${index + 1}`}
                            />
                        </figure>
                    ))}
                    <p>
                        {currentIndex + 1}/{pictures.length}
                    </p>
                </section>

                {/* FIN DU CAROUSEL */}
                {/* CREATION DES INFOS */}

                <section className="infos">
                    <div className="infos__titleAndName">
                        <div className="titleAndLocation">
                            <h3>{title}</h3>
                            <p>{location}</p>
                        </div>
                        <div className="nameAndPic">
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
                        <div className="rating">{stars}</div>
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
