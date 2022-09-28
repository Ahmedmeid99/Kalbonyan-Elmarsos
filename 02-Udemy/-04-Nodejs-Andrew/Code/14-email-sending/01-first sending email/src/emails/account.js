const sgMail = require("@sendgrid/mail");

const sendgridApiKey =
  "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";

sgMail.setApiKey(sendgridApiKey);

sgMail.send({
  from: "ahmedalbakrycool@gmail.com",
  to: "ahmedmoeid36@gmail.com",
  subject: "This is my firt creation",
  text: "I hope this one actually get to you",
  html: '<h3 style="color:red;">Welcom</h3>',
});
