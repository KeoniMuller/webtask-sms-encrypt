const router = require('express').Router();
const caesarCipher = require('../logic/caesar-chiper');

router.post('/encrypt', function (req, res) {
    const shiftAmount = +req.webtaskContext.secrets.SHIFT_AMOUNT;
    res.status(200).send(caesarCipher.encrypt(req.body.message, shiftAmount));
});

router.post('/decrypt', function (req, res) {
    const shiftAmount = +req.webtaskContext.secrets.SHIFT_AMOUNT;
    res.status(200).send(caesarCipher.decrypt(req.body.message, shiftAmount));
});

module.exports = router;