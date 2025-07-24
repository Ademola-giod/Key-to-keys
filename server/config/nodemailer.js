import nodemailer from "nodemailer"

// using Gmail SMTP

const transporter = nodemailer.createTransport({
    service: 'gmail',
    // port: 465,
    auth:{
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
})

export default transporter;