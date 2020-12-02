const { MongoClient, ObjectID } = require('mongodb')
const url = 'mongodb+srv://al:000888@mongoal.pkk5u.mongodb.net/chatme?retryWrites=true&w=majority'

module.exports = {
    MongoClient, ObjectID, url
}