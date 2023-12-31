const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { to, subject, body } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    auth: {
      user: 'postmaster@sandbox1e7af4bb08134557a142bd2e770f4d07.mailgun.org',
      pass: '728281dbf9aff414401dfa3adfb2b96a-1900dca6-9e270a9e',
    },
  });

  const mailOptions = {
    from: 'postmaster@sandbox1e7af4bb08134557a142bd2e770f4d07.mailgun.org',
    to,
    subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
