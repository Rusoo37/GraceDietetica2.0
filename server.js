/* import nodemailer from "nodemailer";

// Configuración del servicio de correo electrónico
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "millorusito@gmail.com",
        pass: "erqz icoo fvfa crek",
    },
});

export const enviarMail = async (email, message) => {
    try {
        const correoOptions = {
            from: `${email} <no-reply@coderplate40.com>`,
            to: "millorusito@gmail.com",
            subject: "Nuevo pedido",
            text: message,
        };
        transporter.sendMail(correoOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
            console.log("Correo electrónico enviado:", info.response);
        });
    } catch (error) {
        console.error(error);
    }
};
 */
