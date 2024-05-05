const mongoose = require("mongoose");

let AnimeSchema = new mongoose.Schema({
    title: {
        type: String
    },
    rating: {
        type: Number
    },
    description: {
        type: String
    },
    episodes: {
        type: Number
    },
    genre: {
        type: [String]
    },
    image: {
        type: String
    }
}, {
    collection: "Anime"
});

module.exports = mongoose.model("Anime", AnimeSchema);