const settings = require('../../../settings/settings');

module.exports = function(username, code, hostAddress) {

    let url = `${hostAddress}/activate?code=${code}`;

    return {
        subject: 'Nexus Gaming account activation',
        text: `
            Welcome to Nexus Gaming, ${username}!
            In order to have full access to the website, we require you to verify your email. 
            Please click the link below to verify your email.
            ${url}
        `,
        html: `
            <p>Welcome to Nexus Gaming, ${username}!</p>
            <p>In order to have full access to the website, we require you to verify your email.<br /> 
            Please click the link below to verify your email.</p>
            <p><a href="${url}">${url}</a></p>
        `
    }
};