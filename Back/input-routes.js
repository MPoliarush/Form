const express = require('express')
const router = express.Router()
const inputController = require('./input-controllers')

router.get('/', inputController.getAllInputs)

router.post('/',inputController.addInputs)

module.exports = router