const speakeasy = require('speakeasy');

// Generate a TOTP based on the secret key
const generateOTP = () => {
    const secret = speakeasy.generateSecret();
    const otp = speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32',
        step: 30 // time to expire
    })
    return {
        key: secret.base32,
        otp
    }
}

const validateOTP = (secret, OTP) => {
    return speakeasy.totp.verify({
        secret: secret,
        encoding: 'base32',
        step: 30, // time in seconds
        token: OTP,// Replace with the user's input
        window: 1 // The number of time steps to look forward/backward for token validation
    });
}

module.exports = {
    generateOTP,
    validateOTP
}
