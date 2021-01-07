const nodemailer = require('nodemailer');

module.exports = (email, name, msg, anexo) => {
  const smtpTransport = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    auth: {
      user: 'postmaster@sandbox7b24a1a7ef2d4b669f71bdf7db02898c.mailgun.org',
      pass: 'xxxxxxxxxx',
    },
  });

  const mail = {
    from: `'${name} - <${email}>'`,
    to: 'jnrplay@hotmail.com',
    subject: `${name} te enviou uma mensagem`,
    text: msg,
  };

  if (anexo) {
    console.log(anexo);
    mail.attachments = [];
    mail.attachments.push({
      filename: anexo.originalname,
      content: anexo.buffer,
    });
  }

  return new Promise((resolve, reject) => {
    smtpTransport
      .sendMail(mail)
      .then((response) => {
        smtpTransport.close();
        return resolve(response);
      })
      .catch((error) => {
        smtpTransport.close();
        return reject(error);
      });
  });
};
