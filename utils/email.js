const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    //1) create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        password: process.env.EMAIL_PASSWORD,
      },
    });
    //2)Define the email options
    const mailOptions = {
      from: 'sunjay Varshan <takezo@gmail.com>',
      to: options.email,
      subject: options.subject,
      text: options.message,
      //html
    };
    //3) Actually send the mail
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log('error sending email:', error);
    throw error;
  }
};

module.exports = sendEmail;
