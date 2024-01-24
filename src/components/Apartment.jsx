import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Dropdown from "./Dropdown";
import Footer from "./Footer";

// Import svg flèche et étoiles
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
    const ratingNumber = parseInt(rating);

    const stars = Array.from({ length: 5 }, (_, index) => {
        const starColor = index < ratingNumber ? "red" : "gray";
        const starSvg = starColor === "red" ? redStar : grayStar;

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
                <section className="dropdownContainer">
                    <Dropdown title={"Description"} options={description} />
                    <Dropdown title={"Équipements"} options={equipments} />
                </section>
            </main>
            <Footer />
        </div>
    );
}
