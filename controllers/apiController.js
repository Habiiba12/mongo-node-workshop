const fs = require('fs');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require("mongodb").ObjectID;

router.use(bodyParser.json());
router.get('/students/:id', (req, res) => {
    const students = req.param.id;
    const mongoConnection = 'mongodb://localhost:27017/profile';

    MongoClient.connect(mongoConnection, (err, db) => {
        console.log(err);
        const cursor = db.collection('students').find(ObjectID(students));
        cursor.toArray((error, students) => {
            db.close();
            res.json(students);
        });
    });

});

router.get("/students", (req, res) => {
    const mongoConnection = 'mongodb://localhost:27017/profile';

    MongoClient.connect(mongoConnection, (err, db) => {
        console.log(err);
        const cursor = db.collection('students').find();
        cursor.toArray((error, posts) => {
            db.close();
            res.json(posts);
        });
    });
    
})

router.get('/posts', (req, res, next) => {
    const mongoConnection = 'mongodb://localhost:27017/profile';

    MongoClient.connect(mongoConnection, (err, db) => {
        console.log(err);
        const cursor = db.collection('posts').find();
        cursor.toArray((error, posts) => {
            db.close();
            res.json(posts);
        });
    });
});

router.post('/posts', (req, res) => {
    console.log(req.body);
    res.status(500).send('not implemented');
});

module.exports = router;