module.exports = function(username, code) {

    let url = `https://nexusgaming.org/activate?key=${code}`;

    return {
        subject: 'Nexus Gaming account activation',
        text: `
            Welcome to Nexus Gaming ${username},
            In order to have full access to the website, we require you to verify your email. 
            Please click the link below to verify your email.
            ${url}
        `,
        html: `
            <p>Welcome to Nexus Gaming ${username},<br />
            In order to have full access to the website, we require you to verify your email.<br /> 
            Please click the link below to verify your email.</p>
            <p><a href="${url}">${url}</a></p>
        `
    }
};