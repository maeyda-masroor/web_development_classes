const express = require('express');
const mongoose = require('mongoose');
const cookiesSession = require( 'cookie-session' );
const keys = require('./config/keys');
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(cookiesSession({
    maxAge: 30 * 24*60*60*1000,
    keys:[keys.cookieskey]

}))
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
