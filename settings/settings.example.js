/**
 * Production: Remove the .example
 */
module.exports = {
    production: true,
    database: {
        host: "localhost",
        user: "postgres",
        password: "password",
        database: "nexus",
        port: 5432
    },
    email: {
        from: '"Nexus Gaming" <no-reply@gamingnex.us>',
        transporter: {
            host: "smtp.example.com",
            port: 465,
            secure: true,
            auth: {
                user: "no-reply@gamingnex.us",
                pass: "password"
            }
        }
    },
    jwt: {
        secret: "secrethere",
        issuer: "localhost",
        audience: "localhost"
    }
};