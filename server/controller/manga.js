// let mangaList = [
//     {
//         mangaName: "Berserk",
//         desc: "Guts, a former mercenary now known as the 'Black Swordsman,'is out for revenge. After a tumultuous childhood, he finally finds someonehe resects and believes he can trust, only to have everything fall apartwhen this person takes away everything important to Guts for the purposeof fulfilling his own desires. Now marked for death, Guts becomescondemned to a fate in which he is relentlessly pursued by demonicbeings.",
//         genre: ["Gore", "Military", "Mythology", "Psychological"],
//         img: "../assets/manga/berserk.jpg",
//         rating: 9.7
//     },
//     {
//         mangaName: "JoJo's Adventure",
//         desc: "In the American Old West, the world's greatest race is aboutto begin. Thousands line up in San Diego to travel over six thousandkilometers for a chance to win the grand prize of fifty million dollars.With the era of the horse reaching its end, contestants are allowed to useany kind of vehicle they wish. Competitors will have to endure gruelingconditions, traveling up to a hundred kilometers a day through unchartedwastelands. The Steel Ball Run is truly a one-of-a-kind event.",
//         genre: ["Action", "Adventure", "Mystery", "Supernatural"],
//         img: "../assets/manga/jojo.jpg",
//         rating: 9.3
//     },
//     {
//         mangaName: "Vagabond",
//         desc: "In 16th-century Japan, Shinmen Takezou is a wild, rough youngman, in both his appearance and his actions.His aggressive nature has wonhim the collective reproach and fear of his village, leading him and hisbest friend, Matahachi Honiden, to run away in search of something granderthan provincial life.The pair enlist in the Toyotomi army, yearning forglory—but when the Toyotomi suffer a crushing defeat at the hands of theTokugawa Clan at the Battle of Sekigahara, the friends barely make it outalive.",
//         genre: ["Action", "Adventure"],
//         img: "../assets/manga/vagabond.jpg",
//         rating: 9.25
//     },
//     {
//         mangaName: "One Piece",
//         desc: "Gol D. Roger, a man referred to as the 'King of the Pirates,'is set to be executed by the World Government.But just before his demise,  he confirms the existence of a great treasure, One Piece, locatedsomewhere within the vast ocean known as the Grand Line.Announcing thatOne Piece can be claimed by anyone worthy enough to reach it, the King ofthe Pirates is executed and the Great Age of Pirates begins.",
//         genre: ["Action", "Adventure", "Fantasy"],
//         img: "../assets/manga/one.jpg",
//         rating: 9.22
//     },
//     {
//         mangaName: "Slam Dunk",
//         desc: "Hanamichi Sakuragi, a tall, boisterous teenager withflame- red hair and physical strength beyond his years, is eager to put anend to his rejection streak of 50 and finally score a girlfriend as hebegins his first year of Shohoku High.However, his reputation fordelinquency and destructiveness precedes him, and most of his fellowstudents subsequently avoid him like the plague.As his first day ofschool ends, he is left with two strong thoughts: 'I hate basketball' and'I need a girlfriend.'",
//         genre: ["Sports"],
//         img: "../assets/manga/slam.jpg",
//         rating: 9.09
//     },
//     {
//         mangaName: "Full Metal Alchemist",
//         desc: "Alchemists are knowledgeable and naturally talentedindividuals who can manipulate and modify matter due to their art.Yetdespite the wide range of possibilities, alchemy is not as all - powerful asmost would believe.Human transmutation is strictly forbidden, and whoeverattempts it risks severe consequences.Even so, siblings Edward andAlphonse Elric decide to ignore this great taboo and bring their motherback to life.Unfortunately, not only do they fail in resurrecting her,they also pay an extremely high price for their arrogance: Edward loseshis left leg and Alphonse his entire body.Furthermore, Edward also givesup his right arm in order to seal his brother's soul into a suit oarmor.",
//         genre: ["Action", "Adventure", "Drama", "Fantasy"],
//         img: "../assets/manga/fma.jpg",
//         rating: 9.04
//     },
// ];

let genreList = [
    "Action", "Adventure", "Drama", "Fantasy", "Sports", "Mystery",
    "Supernatural", "Gore", "Military", "Mythology", "Psychological"
];

let mangaDB = require("../models/manga");

const getMangaList = (req, res) => {
    mangaDB.find({})
        .then((result) => res.json(result))
        .catch(err => {
            console.error('Error fetching all mangas:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
    // res.send(mangaList);
}

const filterMangaByGenre = (req, res) => {
    let genre = req.params.genre;

    if (genre === "All") {
        mangaDB.find({})
            .then((result) => res.json(result))
            .catch(err => {
                console.error('Error fetching all mangas:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
        return;
    }
    mangaDB.find({ genre: { $in: [genre] } })
        .then((filteredMangaList) => res.json(filteredMangaList))
        .catch(err => {
            console.error('Error fetching manga by genre:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });


    // let genre = req.params.genre;
    // if (genre === "All") {
    //     res.send(mangaList);
    //     return;
    // }
    // let filteredMangaList = [];
    // for (let m of mangaList) {
    //     if (m.genre.includes(genre)) {
    //         filteredMangaList.push(m);
    //     }
    // }
    // res.send(filteredMangaList);
}

const getMangaGenreList = (req, res) => {
    res.send(genreList);
}

module.exports = {
    getMangaList,
    filterMangaByGenre,
    getMangaGenreList
}