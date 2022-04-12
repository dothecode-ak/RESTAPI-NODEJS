import express from 'express';
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
import  './database/config.js';
 
import APIrouter from './routes/rest-api.js';
const PORT = process.env.PORT;
var app = express();
// app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", APIrouter);
app.listen(PORT, () =>
{
    console.log(`Server is running at ${PORT}`);
})