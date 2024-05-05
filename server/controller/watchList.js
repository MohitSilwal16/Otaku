let fakeToDoList = [
    { task: "One Piece", completed: true },
    { task: "Naruto", completed: false },
    { task: "Ouran High School", completed: false },
];

let watchListDB = require("../models/watchList");

const getWatchList = (req, res) => {
    watchListDB.find({})
        .then((result) => res.json(result))
        .catch(err => {
            console.error('Error fetching WatchList:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
    // res.send(fakeToDoList);
};

const addWatchList = (req, res) => {
    const todo = req.body;
    watchListDB
        .create(todo).then(result => {
            console.log(result);
            res.status(200).json({ "message": "Task Added" });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ "message": err })
        });
    // const todo = req.body;

    // console.log(todo);
    // fakeToDoList.push(todo);

    // res.status(200).json({ "message": "Task Added" });
};

const updateWatchList = (req, res) => {
    const task = req.params.task;

    watchListDB
        .findOne({ task: task })
        .then(foundTask => {
            if (!foundTask) {
                return res.status(201).json({ message: "Task Not Found" });
            }

            foundTask.completed = !foundTask.completed;
            
            // Save the updated task
            return foundTask.save();
            res.status(200).json({ message: "Task Updated" });
        })
        .catch(err => {
            console.error("Error toggling completed status:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });

    // const task = req.params.task;

    // for (let t of fakeToDoList) {
    //     if (t.task === task) {
    //         t.completed = !t.completed;
    //         res.status(200).json({ "message": "Task Updated" });
    //         return;
    //     }
    // }
    // res.status(201).json({ "message": "Task Not Found" });
};

const deleteWatchList = (req, res) => {
    const task = req.params.task;

    watchListDB
        .deleteOne({ task: task })
        .then(foundTask => {
            console.log(foundTask);
            if (foundTask.acknowledged) {
                return res.status(200).json({ "message": "Task Deleted" });
            }
            return res.status(201).json({ "message": "Task Not Found" });
        })
        .catch(err => {
            console.error("Error deleting task:", err);
            res.status(500).json({ error: "Internal Server Error" });
        })

    // const task = req.params.task;

    // for (let i = 0; i < fakeToDoList.length; ++i) {
    //     if (fakeToDoList[i].task === task) {
    //         fakeToDoList.splice(i, 1);
    //         res.status(200).json({ "message": "Task Deleted" });
    //         return;
    //     }
    // }
    // res.status(201).json({ "message": "Task Not Found" });
};

module.exports = {
    getWatchList, addWatchList, updateWatchList, deleteWatchList
};