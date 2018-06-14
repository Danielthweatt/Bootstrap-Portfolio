// Dependencies
const express = require("express");
const path = require("path");

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
    console.log(req.body);
    res.status(200).end();
});

// Export
module.exports = router;