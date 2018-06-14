// Dependencies
const express = require("express");
const path = require("path");
const nodemailer = require('nodemailer');

// Router Setup
const router = express.Router();

// Routes
router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/portfolio", function(req, res){
    res.sendFile(path.join(__dirname, "../views/portfolio.html"));
});

router.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "../views/contact.html"));
});

router.post("/message", function(req, res){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "",
            pass: ""
        }
    }); 
    const mailOptions = {
        from: "",
        to: "dthweatt192@gmail.com",
        subject: "New Message Via Portfolio",
        text: "Name of Sender: " + req.body.name + "\nEmail Address: " + req.body.email + "\nMessage: " + req.body.message
    };
    transporter.sendMail(mailOptions, function(err, info){
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).end();
        }
    });
});

// Export
module.exports = router;