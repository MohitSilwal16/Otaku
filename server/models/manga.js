const mongoose = require("mongoose");

let MangaSchema = new mongoose.Schema({
    mangaName: {
        type: String
    },
    desc: {
        type: String
    },
    genre: {
        type: [String]
    },
    img: {
        type: String
    },
    rating: {
        type: Number
    },
}, {
    collection: "Manga"
});

module.exports = mongoose.model("Manga", MangaSchema);