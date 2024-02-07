import Titulos from "../../common/titulos/Titulos";
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="container-about-us">
            <Titulos titulo={"Sobre Nosotros"} />
            <div className="container-info-about">
                <div>
                    <p>
                        Nunc et sollicitudin arcu. Pellentesque varius odio at
                        ante hendrerit faucibus. Ut tellus erat, tempor ac
                        pulvinar dictum, pharetra nec nulla. Duis id justo erat.
                        In a vehicula elit. Etiam accumsan suscipit ultrices.
                        Pellentesque quis iaculis sapien. In quis risus nisi.
                        Curabitur tincidunt congue vehicula.
                    </p>
                </div>
                <div>
                    <img src="imagen" alt="imagen" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
