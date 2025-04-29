const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

const blog = require('./routes/blog');

// mount

app.use("/api/v1", blog);

const dbConnect = require('./config/database');
dbConnect();

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT} successfully`);
})

app.get("/", (req,res)=>{
    res.send(`<h1>This in my home page</h1>`);
})