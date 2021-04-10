const nodemailer = require("nodemailer");

const sendingEmail = ({ email, nom, password }) => {
  console.log(
    "🚀 ~ file: sendMail.js ~ line 4 ~ sendingEmail ~ email, nom, password",
    email,
    nom,
    password
  );
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sarragomycode@gmail.com",
      pass: "50339569",
    },
  });

  let mailOptions = {
    from: "sarragomycode@gmail.com",
    to: email,
    subject: "create new user",
    text: `
    Hi ${nom},
    This is your password: ${password}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("email sending error", error.message);
    } else {
      console.log("email sent", info.reponse);
    }
  });
};

module.exports = sendingEmail;
