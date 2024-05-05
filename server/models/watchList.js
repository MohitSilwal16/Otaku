const mongoose = require("mongoose");

let WatchList = new mongoose.Schema({
    task: {
        type: String
    },
    completed: {
        type: Boolean
    }
}, {
    collection: "Watchlist"
});

module.exports = mongoose.model("WatchList", WatchList);