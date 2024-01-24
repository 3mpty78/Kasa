import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <main id="notFound">
                <Navbar />
                <div className="content">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                    <Link target="_top" to={"/"}>
                        Retourner sur la page d'accueil
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
