// let animeList = [
//     {
//         title: "Attack on Titan",
//         rating: 9.0,
//         description: "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years.",
//         episodes: 75,
//         genre: ["Action", "Dark Fantasy"],
//         image: "../assets/anime/AttackOnTitan.jpg"
//     },
//     {
//         title: "One Piece",
//         rating: 8.7,
//         description: "Gol D. Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.",
//         episodes: 1000,
//         genre: ["Adventure", "Comedy"],
//         image: "../assets/anime/OnePiece.jpg"
//     },
//     {
//         title: "Naruto",
//         rating: 8.3,
//         description: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja. Along the way, Naruto makes friends and foes alike, mastering new abilities and preparing for the battles that lie ahead.",
//         episodes: 720,
//         genre: ["Action", "Adventure"],
//         image: "../assets/anime/Naruto.jpg"
//     },
//     {
//         title: "Death Note",
//         rating: 8.9,
//         description: "Light Yagami, a high school student, discovers a mysterious notebook that allows him to kill anyone by writing their name while picturing their face. With this newfound power, Light decides to rid the world of criminals and become the god of a new, peaceful world. However, a brilliant detective known only as L is hot on his trail, leading to a high-stakes game of cat and mouse.",
//         episodes: 37,
//         genre: ["Psychological", "Thriller"],
//         image: "../assets/anime/DeathNote.jpg"
//     },
//     {
//         title: "Fullmetal Alchemist: Brotherhood",
//         rating: 9.1,
//         description: "Two brothers, Edward and Alphonse Elric, seek the Philosopher's Stone to restore their bodies after a failed alchemy experiment. Along their journey, they uncover a deep conspiracy that threatens the entire nation, while confronting the sins of their past.",
//         episodes: 64,
//         genre: ["Adventure", "Fantasy"],
//         image: "../assets/anime/FullmetalAlchemistBrotherhood.jpg"
//     },
//     {
//         title: "My Hero Academia",
//         rating: 8.4,
//         description: "In a world where nearly every human has a superpower known as a Quirk, Izuku Midoriya dreams of becoming a hero despite being born without one. When he inherits the Quirk of the greatest hero, All Might, his journey to become the world's strongest hero begins.",
//         episodes: 104,
//         genre: ["Action", "Superhero"],
//         image: "../assets/anime/MyHeroAcademia.jpg"
//     },
//     {
//         title: "Demon Slayer: Kimetsu no Yaiba",
//         rating: 8.6,
//         description: "Tanjiro Kamado, a kind-hearted boy, becomes a demon slayer after his family is slaughtered by demons, and his sister Nezuko is turned into one. With his swordsmanship and determination, Tanjiro sets out to avenge his family and find a cure for his sister.",
//         episodes: 26,
//         genre: ["Action", "Dark Fantasy"],
//         image: "../assets/anime/DemonSlayer.jpg"
//     },
//     {
//         title: "Classroom of the Elite",
//         rating: 8.0,
//         description: "Koudo Ikusei Senior High School is a leading prestigious school with state-of-the-art facilities, where nearly 100% of students go on to university or find employment. The students there have the freedom to wear any hairstyle and bring any personal effects they desire. Koudo Ikusei is a paradise-like school, but the truth is that only the most superior of students receive favorable treatment.",
//         episodes: 12,
//         genre: ["Psychological", "School"],
//         image: "../assets/anime/ClassroomOfTheElite.jpg"
//     },
//     {
//         title: "Bleach",
//         rating: 8.2,
//         description: "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. To save his family, Ichigo becomes a Soul Reaper, a guardian of the living world and defeater of corrupted souls. Alongside his friends, Ichigo battles countless enemies, both human and supernatural, to protect the innocent.",
//         episodes: 366,
//         genre: ["Action", "Supernatural"],
//         image: "../assets/anime/Bleach.jpg"
//     }, {
//         title: "Ouran High School Host Club",
//         rating: 8.5,
//         description: "Haruhi Fujioka, a scholarship student at the prestigious Ouran Academy, accidentally breaks an expensive vase and finds herself in debt to the school's Host Club. To repay the debt, she must disguise herself as a boy and work as a host. Through her experiences, she discovers the complexities of friendship, love, and self-identity.",
//         episodes: 26,
//         genre: ["Romance", "Comedy"],
//         image: "../assets/anime/OuranHighSchoolHostClub.jpg"
//     }
// ];

let genreList = [
    "Action",
    "Dark Fantasy",
    "Adventure",
    "Romance",
    "Comedy",
    "Psychological",
    "Thriller",
    "Fantasy",
    "Superhero",
    "School",
    "Supernatural"
];

let animeDB = require("../models/anime");

const getAnimeList = (req, res) => {
    animeDB.find({})
        .then((result) => res.json(result))
        .catch(err => {
            console.error('Error fetching anime:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });;
    // res.send(animeList);
}

const filterAnimeByGenre = (req, res) => {
    let genre = req.params.genre;

    if (genre === "All") {
        animeDB.find({})
            .then((result) => res.json(result))
            .catch(err => {
                console.error('Error fetching all animes:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            });;
        return;
    }

    animeDB.find({ genre: { $in: [genre] } })
        .then(filteredAnimeList => res.json(filteredAnimeList))
        .catch(err => {
            console.error('Error fetching anime by genre:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });

    // let genre = req.params.genre;

    // if (genre === "All") {
    //     res.send(animeList);
    //     return;
    // }
    // let filteredAnimeList = [];
    // for (let a of animeList) {
    //     if (a.genre.includes(genre)) {
    //         filteredAnimeList.push(a);
    //     }
    // }
    // res.send(filteredAnimeList);
}

const getAnimeGenreList = (req, res) => {
    res.send(genreList);
}

module.exports = {
    getAnimeList,
    filterAnimeByGenre,
    getAnimeGenreList
}