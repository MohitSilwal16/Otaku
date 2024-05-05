const express = require('express');

const { addWatchList, getWatchList, updateWatchList, deleteWatchList } = require('../controller/watchList');
const { getAnimeList, filterAnimeByGenre, getAnimeGenreList } = require('../controller/anime');
const { getMangaList, filterMangaByGenre, getMangaGenreList } = require('../controller/manga');

const routes = express.Router();

// Watch List Routes
routes.post("/todo",addWatchList);
routes.get("/todo",getWatchList);
routes.put("/todo/:task",updateWatchList);
routes.delete("/todo/:task",deleteWatchList);

// Anime Routes
routes.get("/anime",getAnimeList);
routes.get("/anime/genre",getAnimeGenreList);
routes.get("/anime/:genre",filterAnimeByGenre);

// Manga Routes
routes.get("/manga",getMangaList);
routes.get("/manga/genre",getMangaGenreList);
routes.get("/manga/:genre",filterMangaByGenre);

module.exports = routes;