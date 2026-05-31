
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const rateLimit = require("express-rate-limit");

// const dns = require("node:dns");
// dns.setDefaultResultOrder("ipv4first");

// const app = express();


// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://sb-pro-audio-1.onrender.com"
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
      
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         return callback(new Error("The CORS policy for this site does not allow access from the specified Origin."), false);
//       }
//       return callback(null, true);
//     },
//     methods: ["GET", "POST", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// app.use(express.json());

// const contactLimiter = rateLimit({
//   windowMs: 15 * 60 * 1000, 
//   max: 5, 
//   message: {
//     success: false,
//     message: "Too many requests from this IP, please try again after 15 minutes."
//   },
//   standardHeaders: true,
//   legacyHeaders: false,
// });

// const transporter = nodemailer.createTransport({
//   host: "142.251.4.108", 
//   port: 587,            
//   secure: false,         
//   requireTLS: true,      
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   pool: true, 
//   tls: {
//     servername: "smtp.gmail.com" 
//   }
// });

// transporter.verify((error, success) => {
//   if (error) {
//     console.error("Transporter connection validation failed:", error.message);
//   } else {
//     console.log("Production Mail Delivery Engine Ready");
//   }
// });


// app.post("/api/contact", contactLimiter, async (req, res) => {
//   try {
//     const { name, email, phone, message } = req.body;

//     if (!name || !email || !phone || !message) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required.",
//       });
//     }

    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({
//         success: false,
//         message: "Please enter a valid email address.",
//       });
//     }

//     const cleanName = name.trim();
//     const cleanPhone = phone.trim();
//     const cleanMessage = message.trim();

//     const adminMail = {
//       from: `"SB PRO-AUDIO Admin" <${process.env.EMAIL_USER}>`,
//       to: process.env.EMAIL_USER,
//       replyTo: email,
//       subject: `🚨 New Enquiry From ${cleanName}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
//           <h2 style="color: #ff9f00; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Submission</h2>
//           <p><strong>Name:</strong> ${cleanName}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${cleanPhone}</p>
//           <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #ff9f00;">
//             <h3>Message/Requirements:</h3>
//             <p style="white-space: pre-wrap; line-height: 1.6;">${cleanMessage}</p>
//           </div>
//         </div>
//       `,
//     };

//     const customerMail = {
//       from: `"SB PRO-AUDIO" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Enquiry Received | SB PRO-AUDIO",
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
//           <h2 style="color: #ff9f00;">Thank You For Reaching Out!</h2>
//           <p>Hi <strong>${cleanName}</strong>,</p>
//           <p>We've successfully received your requirements. Our team will review the details and get back to you shortly.</p>
//           <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 6px;">
//             <h4 style="margin-top: 0;">Submission Snapshot:</h4>
//             <p style="margin: 4px 0;"><strong>Phone:</strong> ${cleanPhone}</p>
//             <p style="margin: 4px 0;"><strong>Email:</strong> ${email}</p>
//           </div>
//           <p style="font-size: 0.9rem; color: #666;">This is an automated confirmation. Please do not reply directly to this email.</p>
//         </div>
//       `,
//     };

//     await Promise.all([
//       transporter.sendMail(adminMail),
//       transporter.sendMail(customerMail)
//     ]);

//     return res.status(200).json({
//       success: true,
//       message: "Message sent successfully!",
//     });

//   } catch (error) {
//     console.error("Production Core Server Mailer Error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "An internal server error occurred while processing your request.",
//     });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Production server securely handling operations on port ${PORT}`);
// });



require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { Resend } = require("resend"); // Switched from nodemailer to official Resend SDK

const app = express();

// Initialize the Resend client using the secure HTTP REST API
const resend = new Resend(process.env.RESEND_API_KEY);

// 1. STABLE PRODUCTION CORS POLICY
const allowedOrigins = [
  "http://localhost:5173",
  "https://sb-pro-audio-1.onrender.com" // If your frontend is on Vercel/Netlify, replace this with that URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("The CORS policy for this site does not allow access from the specified Origin."), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// 2. ANTI-SPAM RATE LIMITING (Max 5 contact requests per 15 mins per IP)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  message: {
    success: false,
    message: "Too many requests from this IP, please try again after 15 minutes."
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/* ---------------- CONTACT API ---------------- */
app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    /* ---------------- VALIDATION & SANITIZATION ---------------- */
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanMessage = message.trim();

    /* ---------------- PARALLELIZED DELIVERY VIA HTTPS (PORT 443) ---------------- */
    // Free tiers allow sending cleanly out-of-the-box using 'onboarding@resend.dev' 
    // to your own registered account email address (configured in process.env.EMAIL_USER).
    await Promise.all([
      // Admin Notification
      resend.emails.send({
        from: "SB PRO-AUDIO Admin <onboarding@resend.dev>",
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `🚨 New Enquiry From ${cleanName}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
            <h2 style="color: #ff9f00; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Submission</h2>
            <p><strong>Name:</strong> ${cleanName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${cleanPhone}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #ff9f00;">
              <h3>Message/Requirements:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${cleanMessage}</p>
            </div>
          </div>
        `,
      }),
      
      // Customer Acknowledgement 
      // Note: On Resend's free tier, this will go through if 'email' matches your verified domain/email.
      resend.emails.send({
        from: "SB PRO-AUDIO <onboarding@resend.dev>",
        to: email,
        subject: "Enquiry Received | SB PRO-AUDIO",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
            <h2 style="color: #ff9f00;">Thank You For Reaching Out!</h2>
            <p>Hi <strong>${cleanName}</strong>,</p>
            <p>We've successfully received your requirements. Our team will review the details and get back to you shortly.</p>
            <div style="margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 6px;">
              <h4 style="margin-top: 0;">Submission Snapshot:</h4>
              <p style="margin: 4px 0;"><strong>Phone:</strong> ${cleanPhone}</p>
              <p style="margin: 4px 0;"><strong>Email:</strong> ${email}</p>
            </div>
            <p style="font-size: 0.9rem; color: #666;">This is an automated confirmation. Please do not reply directly to this email.</p>
          </div>
        `,
      })
    ]);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Production Core Server Mailer Error:", error);

    return res.status(500).json({
      success: false,
      message: "An internal server error occurred while processing your request.",
    });
  }
});

/* ---------------- SERVER STARTUP ---------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Production server securely handling operations on port ${PORT}`);
});