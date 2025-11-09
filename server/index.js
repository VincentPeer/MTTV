const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // You can change this port if needed

// Middleware
app.use(cors());
app.use(express.json());

// Set up multer for in-memory file storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Nodemailer transporter setup
// IMPORTANT: Replace with your own email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or your email provider
  auth: {
    user: 'your-email@gmail.com', // Your email address
    pass: 'your-email-password',   // Your email password or an app-specific password
  },
});

// API Endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const { originalname, buffer } = req.file;

  const mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: 'michel.gaillard@example.com', // Recipient address (Michel Gaillard)
    subject: `Nouveau bilan d'entreprise : ${originalname}`,
    text: `Veuillez trouver ci-joint le bilan de l'entreprise "${originalname}".`,
    attachments: [
      {
        filename: originalname,
        content: buffer,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email.');
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('File uploaded and email sent successfully.');
  });
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
