var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, function () {
    console.log('3000 server on')
})
app.use(express.static('public'));

app.get('/', function (req, res) {
    console.log('main')
    res.sendFile(__dirname + '/public/form.html')
})

app.post('/text_post', function (req, res) {
    console.log(req.body.text)
    res.json({'result':'ok','text': req.body.text })
})