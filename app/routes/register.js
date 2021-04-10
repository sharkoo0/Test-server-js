const express = require('express');
const fs = require('fs');

const router = express.Router();

const readFilePromise = function(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

fs.readFile("./uncensored_file.txt", 'utf8', (err, data) => {});

router.post('/', (req, res) => {
    // res.write(fs.readFile('../app/index.html', 'utf-8', (err, data) => {
    //         if (err) res.status(404);
    //         res.send(data);
    //     }

    fs.readFile('../app/index.html', (err, data) => {
        if (err) res.status(404);
        res.write(data);
        res.end();
    })
});

router.get('/', (req, res) => {
    res.send(readFilePromise('../app/index.html').catch('Error'));
});

module.exports.registerRouter = router;