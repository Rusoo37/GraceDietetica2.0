import { useState, useEffect } from "react";
import "./ScrollToUp.css";
import flechaArriba from "./../../img/flecha-arriba.png";

const ScrollToUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 100);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`scroll-to-top-button ${
                isVisible ? "visible" : ""
            }              
            `}
            onClick={scrollToTop}
        >
            <img src={flechaArriba} alt="flecha-arriba" />
        </div>
    );
};

export default ScrollToUp;
