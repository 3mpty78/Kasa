import { useState } from "react";
import arrow from "../assets/images/arrow.svg";

export default function Carousel({ pictures }) {
    const [currentIndex, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((currentValue) =>
            currentValue === pictures.length - 1 ? 0 : currentValue + 1
        );
    };

    const previousSlide = () => {
        setIndex((currentValue) =>
            currentValue === 0 ? pictures.length - 1 : currentValue - 1
        );
    };

    return (
        <section className="carousel">
            <div
                className="arrows"
                style={pictures.length <= 1 ? { display: "none" } : {}}>
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
                        display: index === currentIndex ? "block" : "none",
                    }}>
                    <img
                        src={image}
                        alt={`Preview image number ${index + 1}`}
                    />
                </figure>
            ))}
            <p style={pictures.length <= 1 ? { display: "none" } : {}}>
                {currentIndex + 1}/{pictures.length}
            </p>
        </section>
    );
}
