require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://sb-pro-audio-1.onrender.com",
    ],

    methods: ["GET", "POST"],

    allowedHeaders: ["Content-Type"],

    credentials: true,
  })
);
app.options('{*splat}', cors());
app.use(express.json());

/* ---------------- MAIL TRANSPORTER ---------------- */

// const transporter = nodemailer.createTransport({
//   service: "gmail",

//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });



const transporter = nodemailer.createTransport({
  host: '://gmail.com', 
  port: 465,
  secure: true, 
  
  
  connectionTimeout: 10000, 
  family: 4,                
  
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* Verify transporter connection */

transporter.verify((error, success) => {
  if (error) {
    console.log("MAIL ERROR:");
    console.log(error);
    console.log(error.message);
  } else {
    console.log("Mail server is ready");
  }
});

/* ---------------- CONTACT API ---------------- */

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    /* ---------------- VALIDATION ---------------- */

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    /* ---------------- ADMIN EMAIL ---------------- */

    const adminMail = {
      from: `"SB PRO-AUDIO Website" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Enquiry From ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          
          <h2 style="color: #d4a017;">
            New Contact Form Submission
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">
                <strong>Name</strong>
              </td>

              <td style="padding: 10px; border: 1px solid #ddd;">
                ${name}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">
                <strong>Email</strong>
              </td>

              <td style="padding: 10px; border: 1px solid #ddd;">
                ${email}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px; border: 1px solid #ddd;">
                <strong>Phone</strong>
              </td>

              <td style="padding: 10px; border: 1px solid #ddd;">
                ${phone}
              </td>
            </tr>

          </table>

          <div style="margin-top: 25px;">
            <h3>Requirements:</h3>

            <p style="line-height: 1.7;">
              ${message}
            </p>
          </div>

        </div>
      `,
    };

    /* ---------------- CUSTOMER AUTO REPLY ---------------- */

    const customerMail = {
      from: `"SB PRO-AUDIO" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "We Received Your Enquiry | SB PRO-AUDIO",

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">

          <h2 style="color: #d4a017;">
            Thank You For Contacting SB PRO-AUDIO
          </h2>

          <p style="line-height: 1.8;">
            Hi <strong>${name}</strong>,
          </p>

          <p style="line-height: 1.8;">
            We have successfully received your enquiry.
            Our team will contact you shortly.
          </p>

          <div style="
            margin-top: 25px;
            padding: 18px;
            background: #f7f7f7;
            border-radius: 8px;
          ">
            <h3>Your Submitted Details</h3>

            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <p style="margin-top: 25px;">
            Regards,<br />
            <strong>SB PRO-AUDIO</strong>
          </p>

        </div>
      `,
    };

    /* ---------------- SEND EMAILS ---------------- */

    await transporter.sendMail(adminMail);

    await transporter.sendMail(customerMail);

    /* ---------------- SUCCESS RESPONSE ---------------- */

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.log("SERVER ERROR:");
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

/* ---------------- SERVER ---------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});