import express from 'express';

let router = express.Router();

router.get('/', function (req, res, next) {
    fetch(`https://api-web.nhle.com/v1/score/now`, { method: "GET" })
        .then((response) => response.text())
        .then((response) => {
            res.send(response);
        })
        .catch(next);
});

export default router;
