
var express = require('express');
var router = express.Router();

const memos = require('../memo.json');
let count =2;

router.get("/", function (req, res, next) {
    console.log(memos);
    res.send(memos);
    
});
router.post("/", function (req, res, next) {
    const title = req.body.data.title;
    const memo = req.body.data.memo;
    count++;
    const memoboard = {
        id: count,
        title: title,
        memo: memo,
        writer: "익명", 
    };
    memos.push(memoboard);
    res.send("ok");
});
router.get('/:id', function(req, res, next) {

    const m = memos.filter( memo => memo.id == req.params.id);
    res.send(m[0]);


});

module.exports = router;