const sgMail = require("@sendgrid/mail");

const sendgridApiKey =
  "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";

sgMail.setApiKey(sendgridApiKey);
const template1 = `
    <div>
        <h3 style="color:blue;">start using App</h3>
        <p>have a nice time after click start</p>
        <button style="background:green;color:#fff;padding:10px 15px;border:2px solid #fff;">Start<button>
    </div>`;
const sendWelcomEmail = (email, name) => {
  sgMail.send({
    from: "ahmedalbakrycool@gmail.com",
    to: email,
    subject: "This is my firt creation",
    text: `welcome to the app,${name}. let me know how you get along with the app.`,
    html: template1,
  });
};
//////////////////////////////////////
const template2 = `
    <div>
        <h3 style="color:blue;">start using App</h3>
        <p>have a nice time after click start</p>
        <button style="background:green;color:#fff;padding:10px 15px;border:2px solid #fff;">Start<button>
    </div>`;
const sendLastEmail = (email, name) => {
  sgMail.send({
    from: "ahmedalbakrycool@gmail.com",
    to: email,
    subject: "This is my last creation",
    text: `Hi,${name}. let me know if you need help.`,
    html: template2,
  });
};
// ahmedalbakrycool@gmail.com
//ahmedmoeid36@gmail.com
module.exports = {
  sendWelcomEmail,
  sendLastEmail,
};
