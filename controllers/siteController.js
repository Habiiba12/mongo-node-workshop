const fs = require('fs');
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require("mongodb").ObjectID;
const mongoConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/profile';
const mongoose = require('mongoose');

const Post = require('../models/Post');
const formidable = require('express-formidable');
router.use(formidable());

router.get('/', function (req, res) {
    mongoose.connect(mongoConnection);

    // Write code to connect to data);
    const callback = (err, posts) => {

        // res.json(posts);
        res.render('index', {
            title: "Habiiba's profile",
            subheading: "A modern Website built in Node with Handlebars",
            posts: posts
        });

    }
    Post.find({}, callback);
});

router.get('/my-cv', function (req, res) {
    res.render('my-cv');
});

router.get('/admin', function (req, res) {
    res.render('admin');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/customer-serves', function (req, res) {
    res.render('customer-serves');
});
module.exports = router;