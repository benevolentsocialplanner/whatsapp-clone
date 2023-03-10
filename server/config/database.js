const mongoose = require('mongoose');


mongoose.set("strictQuery", false);
const database = () => {
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('connected 2 db');
    })
    .catch((err)=>{
        console.log(err);
    });
};
module.exports = database;