const nodemailer = require('nodemailer');

module.exports = (email, name, msg, anexo) => {
  const smtpTransport = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    auth: {
      user: 'postmaster@sandbox1b01fd03aa944ae5bb41edfbb6468a90.mailgun.org',
      pass: '6e2fe69b9503bce76018e9a44a05ca5d-3d0809fb-fc83918e',
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
