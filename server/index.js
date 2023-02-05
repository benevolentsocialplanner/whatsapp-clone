const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database.js');
const Room = require('./routes/Room.js');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({limit:'30mb', extended:true }));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true }));
app.use(cors());

app.use('/',Room)

app.listen(PORT, () => {
    console.log("running on port: ", PORT);
});


db();
