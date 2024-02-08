import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import FirstNavbar from "./navbar/FirstNavbar";
import { ToastContainer } from "react-toastify";

const LayOut = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <FirstNavbar />
            <Navbar scrollToSection={scrollToSection} />
            <Outlet />
            <Footer />
        </>
    );
};

export default LayOut;
