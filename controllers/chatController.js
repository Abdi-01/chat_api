const { MongoClient, ObjectID, url } = require('../database')

module.exports = {
    getMessages: (req, res) => {
        // res.status(200).send(req.app.arrMsg)
        MongoClient.connect(url, (err, client) => {
            const db = client.db('chatme')
            db.collection('messages').find({}).toArray((error, results) => {
                if (error) console.log(error)
                res.status(200).send(results)
            })
        })
    },
    sendMessage: (req, res) => {
        MongoClient.connect(url, (err, client) => {
            const db = client.db('chatme')
            db.collection('messages').insertMany([req.body], (err, results) => {
                if (err) console.log(err)
                db.collection('messages').find({}).toArray((errFind, resFind) => {
                    if (errFind) console.log(errFind)
                    req.app.io.emit('chat message', resFind)
                    res.status(200).send('Send Success')
                })
            })
        })
    },
    clearMessages: (req, res) => {
        req.app.arrMsg = []
        req.app.io.emit('chat message', req.app.arrMsg)
        res.status(200).send('Clear Message Success')
    }
}