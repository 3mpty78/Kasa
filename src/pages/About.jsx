import React from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

// Import de l'image de bannière
import mountain from "../assets/images/mountain.png";

export default function About() {
    return (
        <div className="aboutContainer">
            <main id="about">
                <Navbar />
                <img
                    className="banner"
                    src={mountain}
                    alt="Mountain banner picture"
                />
                <div className="dropdownContainer">
                    <Dropdown
                        title={"Fiabilité"}
                        options={
                            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                        }
                    />
                    <Dropdown
                        title={"Respect"}
                        options={
                            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
                        }
                    />
                    <Dropdown
                        title={"Service"}
                        options={
                            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
                        }
                    />
                    <Dropdown
                        title={"Sécurité"}
                        options={
                            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes."
                        }
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
