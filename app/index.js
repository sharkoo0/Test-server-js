const express = require('express');
const { router } = require('./routes/user');
const { registerRouter } = require('./routes/register');
const app = express();

const allowedUsers = new Set();
allowedUsers.add('Daniel');

app.use(express.json());
// app.use((req, res, next) => {
//     if (allowedUsers.has(req.query.name)) {
//         next();
//     } else {
//         res.sendStatus(401);
//     }
// });

require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const names = req.query.names;
    if (names === undefined || names === null) {
        res.status(404);
        return;
    }
    if (typeof(names) === 'string') {
        res.send(`Hello, ${names}`);
    } else {
        if (names.length > 1) {
            res.send(`Hello, ${names[1]}`);
        }
    }
    console.log("with invalid data");
});

app.get('/route', (req, res) => {
    res.send('route');
    // readFilePromise('./index.html').then(result => res.send(result)).catch(error => {
    //     console.log(error);
    //     res.sendStatus(500);
    // });

    // try {
    //     const content = await readFilePromise('index.html');
    //     res.send(content);
    // } catch (error) {
    //     res.sendStatus(500);
    //     res.send(error);
    // }
});

app.use('/user', router);

app.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send('Dummy status');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

app.use('/register', registerRouter);
// app.post('/register', (req, res) => {

// });