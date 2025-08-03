const express = require('express');
const router = express.Router();
const restcontroller = require('./restController');

router.post("/dishly/mainadmin", restcontroller.create)

router.get('/dishly/mainadmin', (req,res)=>{
    res.render("user/MainAdmin",{query:req.query})
})

module.exports = router;