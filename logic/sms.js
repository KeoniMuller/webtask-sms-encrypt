const sendEncryptedSMS = function (toPhoneNumber, message, twilioOpts) {
  const { fromNumber, accountSid, authToken } = twilioOpts;
  const client = require('twilio')(accountSid, authToken);
  
  return client.messages
    .create({
       body: message,
       from: fromNumber,
       to: toPhoneNumber
    });
}

module.exports = {
  sendEncryptedSMS
}