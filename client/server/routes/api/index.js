const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/leaves', require('./leave'));
module.exports = router;