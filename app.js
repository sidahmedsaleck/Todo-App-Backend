// loading env variables
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

// database
const connectDB = require('./db/connect');

// middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/v1/tasks',require('./routes/tasks'));

// use static files



// app.get('/',(req,res) => {
//     res.send('Welcom To Task Manager App.')
// })








const start = async () => {
    try {
        await connectDB(process.env.DB_URL);
        app.listen(port,() => {
            console.log(`Task manager app listening on pport : ${port} .`)
        })
    } catch (error) {
        console.log(error);
    }
}


start();
