const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('password-google-oauth20');
const app = express();
passport.use(new GoogleStrategy());
app.get('/',(req,res)=>{
    res.send("Hello World!");
})
const PORT = process.env.PORT || 5000;
app.listen(3000);