
var express = require('express');
var router = express.Router();

const memos = require('../memo.json');
let count =memos.length;

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

//메모의 id값을 주소로 받아와서 삭제
router.delete('/:id', function(req, res, next){
    const id = req.params.id;
    //memo.id 값을 통해 memos의 인덱스 값을 찾아서 삭제
    const delm = memos.filter( memo => memo.id == id);
    //memo 값으로 index 를 찾아서
    const index = memos.indexOf(delm[0])
    //splice로 memos의 해당 id 값을 가진 배열 제거
    memos.splice(index ,1);
});
/*
router.delete('/:id', function(resq, res, next){
    const id = req.params.id;
    const index = memos.findIndex((memo)=> memo.id == id);
    memos.splice(index ,1);
});
*/

router.put('/updateform', function(req, res, next){
    const memo = req.body.data.memo;
    const index = memos.findIndex((m)=> memo.id == m.id);
    memos[index] = memo;
    res.send("ok");
})
module.exports = router;
