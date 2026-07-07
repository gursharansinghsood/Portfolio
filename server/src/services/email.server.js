import { verify } from "node:crypto";
import transport from "../config/email.config.js";
import config from "../config/config.js";

const sendEmail = async ({name, email, phone, message}) => {
    await transport.sendMail({
        from: config.emailUser,
        to: "gursharansinghsood@gmail.com",
        subject: `Portfolio Contact - ${name}`,
        html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone Number:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
        `,
    })
}

export default sendEmail