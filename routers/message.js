const router = require('express').Router();
const sms = require('../logic/sms');

router.post('/message', async function (req, res) {
    const twilioOpts = {
        accountSid:  req.webtaskContext.secrets.TWILIO_ACCOUNT_SID,
        authToken:  req.webtaskContext.secrets.TWILIO_AUTH_TOKEN,
        fromNumber: req.webtaskContext.secrets.TWILIO_MY_NUMBER
    };
    const { message, toNumber } = req.body;

    try {
        await sms.sendEncryptedSMS(toNumber, message, twilioOpts);
        res.status(200).send('Message sent!!');
    } catch(e) {
        console.log(e);
        res.status(500).send('Error sending the message!');
    }  
});

module.exports = router;