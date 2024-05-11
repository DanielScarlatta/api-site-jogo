require("module-alias/register");
const emailConfig = require("@config/smtp.js");
const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const transporter = nodemailer.createTransport({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  auth: {
    user: emailConfig.auth.user,
    pass: emailConfig.auth.pass,
  },
});

function sendEmailForgot(email, name, recoveryCode) {
  console.log(name)
  return new Promise((resolve, reject) => {
    const handlebarOptions = {
      viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve("./src/modules/email/view/"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./src/modules/email/view/"),
      extName: ".handlebars",
    };

    transporter.use("compile", hbs(handlebarOptions));
    const mailOptions = {
      from: emailConfig.auth.use,
      to: email,
      subject: "Recuperação de senha",
      template: "email",
      context: {
        name: name, // Provide the name variable to the template
        tokenForgotPassword: recoveryCode
      },
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        reject("Ocorreu um erro no envio do email, tente mais tarde");
      } else {
        console.log("Email sent: " + info.response);
        resolve(true);
      }
    });
  });
}

module.exports = sendEmailForgot;
