const dotenv = require('dotenv')
const twilio = require('twilio')
dotenv.config();

const sendOtp = async (contact) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = new twilio(accountSid, authToken);

  client.messages.create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+1 980 295 2329',
    to: '+923411511941'
  })
    .then(message => console.log(message.sid)) 
}

module.exports = sendOtp