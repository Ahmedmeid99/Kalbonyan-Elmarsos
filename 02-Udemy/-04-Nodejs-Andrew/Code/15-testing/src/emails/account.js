const sgMail = require("@sendgrid/mail");

const sendgridApiKey =
  process.env.SENDGRID_API_KEY ||
  "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";

sgMail.setApiKey(sendgridApiKey);
const template1 = `
    <div>
        <h3 style="color:blue;">start using App</h3>
        <p>have a nice time after click start</p>
        <button style="background:green;color:#fff;padding:10px 15px;border:2px solid #fff;">Start<button>
    </div>`;
const sendWelcomEmail = (email, name) => {
  sgMail.send(
    {
      from: "ahmedalbakrycool@gmail.com",
      to: email,
      subject: "This is my firt creation",
      text: `welcome to the app,${name}. let me know how you get along with the app.`,
      html: template1,
    },
    (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    }
  );
};
//////////////////////////////////////
const template2 = `
    <div>
        <h3 >send you feedback</h3>
        <a style="color:blue;>contect us</a>
        <p>have a nice day :) </p>
    </div>`;
const sendLastEmail = (email, name) => {
  sgMail.send(
    {
      from: "ahmedalbakrycool@gmail.com",
      to: email,
      subject: "This is my last creation",
      text: `Hi,${name}. let me know if you need help.`,
      html: template2,
    },
    (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    }
  );
};
// ahmedalbakrycool@gmail.com
//ahmedmoeid36@gmail.com
module.exports = {
  sendWelcomEmail,
  sendLastEmail,
};
