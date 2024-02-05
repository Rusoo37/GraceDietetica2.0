import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import FirstNavbar from "./navbar/FirstNavbar";

const LayOut = () => {
    return (
        <>
            <FirstNavbar />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default LayOut;
