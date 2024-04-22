import express from "express";

import api from './api/index.js';

const app = express();
const port = process.env.PORT || 3001;


api(app);

// app.get('/api/games', (req, res) => {
//     console.log('here')
//     fetch(`https://api-web.nhle.com/v1/score/2024-04-10`, { method: "GET" })
//     .then((response) => response.text())
//     .then((response) => {
//         console.log(response)
//         res.send(response);
//     });
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});