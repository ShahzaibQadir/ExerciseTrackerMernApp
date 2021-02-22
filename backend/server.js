const express=require('express'); //Path Get kia Yaha Se Express ka
const cors=require('cors'); //Path Get kia Yaha Se Cors k Pakage ka
const mongoose = require('mongoose');//Path Get kia Yaha Se MongoDB Atlas ko use karne k leye

require('dotenv').config(); // Npm env enivronment variable k leye Path Get kia hai yaha se

const app = express(); // app k variable mai express k function ko initialize kia


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



const port = process.env.PORT || 5000; // hume app server ko local host k port 5000 pr listen karna hai 

app.use(cors());// cors k function use kia yaha pr
app.use(express.json()); 

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);