import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "millorusito@gmail.com",
        pass: "erqz icoo fvfa crek",
    },
});

// Ruta para enviar correos electrónicos
app.post("/enviar-correo", (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    const mailOptions = {
        from: "tu_correo@gmail.com",
        to: "millorusito@gmail.com",
        subject: "Nuevo mensaje del formulario",
        text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send("Correo enviado: " + info.response);
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
