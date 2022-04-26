const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"> <input id="message" name="message" type="text" placeholder="message"><input name="username" id="username"><button type="submit">send</button></form>`)
})
router.post('/', (req, res, next) => {
    data.push(`{${req.body.username}:${req.body.message}}`)
    console.log(data);
    console.log(`{${req.body.username}:${req.body.message}}`)
    res.redirect('/');
});
module.exports = router;