const settings = require('../../settings/settings');
const nodemailer = require('nodemailer');

let Manager = {};

Manager.transporter = nodemailer.createTransport(settings.email.transporter);

Manager.templates = {
    activate: require('./templates/activation.template')
};

Manager.sendActivationMail = (email, username, code) => {
    let mailoptions = Manager.templates.activate(username, code);
    mailoptions.from = settings.email.from;
    mailoptions.to = email;
    
    Manager.transporter.sendMail(mailoptions, (error, info) => {
        if (error) { return console.log(error); }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
};

module.exports = Manager;