import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Apartment from "../components/Apartment";

// Import du JSON
import data from "../assets/logements.json";

export default function ApartmentInfos() {
    const { id } = useParams();

    const selectedApartment = data.find((item) => item.id === id);

    if (!selectedApartment) {
        return <NotFound />;
    }

    return (
        <Apartment
            id={selectedApartment.id}
            pictures={selectedApartment.pictures}
            location={selectedApartment.location}
            title={selectedApartment.title}
            host={selectedApartment.host}
            tags={selectedApartment.tags}
            rating={selectedApartment.rating}
            description={selectedApartment.description}
            equipments={selectedApartment.equipments}
        />
    );
}
