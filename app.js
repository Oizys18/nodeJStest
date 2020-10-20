var express = require('express')
var app = express()
// post 데이터의 바디를 읽기 위해선 parser 필요 
var bodyParser = require('body-parser')

app.listen(3000, function () {
    console.log('start: express server on port 3000s')
});

// static 등록
app.use(express.static('public'));

// json 파싱 
app.use(bodyParser.json());
// json이 아닌 형태로 올 때 
app.use(bodyParser.urlencoded({ extended: true }));

// view engine 정의, ejs 사용 
app.set('view engine', 'ejs')

// url routing 
app.get('/', function (req, res) {
    console.log('index')
})

// url routing : /main 
app.get('/main', function (req, res) {
    res.sendFile(__dirname + "/public/main.html")
})

// post 처리
app.post('/email_post', function (req, res) {
    console.log(req.body.email)
    // 템플릿 사용 안하고 바로 보내기 
    // res.send("<h1>welcome" + req.body.email + "</h1>")

    // ejs 모듈 사용한 템플릿 
    // res.render('보여줄 ejs템플릿', 전달할 object)
    res.render('email.ejs', { 'email': req.body.email })
})

app.post('/ajax_send_email', function (req, res) {
    console.log(req.body.email)
    //check validation about input value (select DB)
    var responseData = {'result':'OK', 'email':req.body.email}
    res.json(responseData)
});