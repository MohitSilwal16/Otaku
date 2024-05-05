const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/route");

mongoose
    .connect("mongodb+srv://menzyman21:Asdfg12345@cluster0.srjh2nj.mongodb.net/Otaku").then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err.reason)
    })

const app = express();

// Enable CORS for all origins
app.use(cors());

app.use(bodyParser.json());

// For loggin on server for debugging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Logging middleware for ress
app.use((req, res, next) => {
    const start = Date.now();
    const originalSend = res.send;
    res.send = function (body) {
        const resTime = Date.now() - start;
        console.log(`[${new Date().toISOString()}] ${res.statusCode} ${req.method} ${req.url} res Time: ${resTime}ms res:`, body);
        originalSend.call(this, body);
    };
    next();
});

// To clear terminal
console.clear();

app.use('/', router);

app.listen(process.env.port || 8080, () => console.log("Running server on http://localhost:8080/"));