const route = require('express').Router()
const { chatController } = require('../controllers')

route.get('/getMessages', chatController.getMessages)
route.post('/sendMessages', chatController.sendMessage)
route.delete('/clearMessages', chatController.clearMessages)

module.exports = route