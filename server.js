import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
/* const PORT = import.meta.env.VITE_PORT; */
const PORT = 5173;

app.use(bodyParser.json());
app.use(express.static("public")); // Reemplaza "public" con tu directorio estático
console.log("Configurando la ruta /checkOut");
app.post("/checkOut", (req, res) => {
    console.log("Solicitud recibida en /checkOut");
    const { email, telefono, direccion } = req.body;

    // Configurar nodemailer con tus credenciales de correo electrónico
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "millorusito@gmail.com",
            pass: "Ruso2003",
        },
    });

    // Configurar el contenido del correo
    const mailOptions = {
        from: email,
        to: "millorusito@gmail.com",
        subject: "Nuevo formulario de checkout",
        html: `
      <p>Email: ${email}</p>
      <p>Teléfono: ${telefono}</p>
      <p>Dirección: ${direccion}</p>
    `,
    };

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        return res.status(200).send("Correo electrónico enviado con éxito.");
    });
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
