var express = require('express');
// var expressHandlebars = require('express-handlebars');
var http = require('http');
var fs = require('fs');

var PORT = 8000;

// var LINES = [
//     "总在不经意间获得简单朴素且乐趣其中的感怀，这种感怀的妙处在于它没有试图去提炼出任何的真理，他就像我们恬然的谈话里总夹杂着“那我懂你的意思了”，但是否是真的明白，却不然得知。即使是这样，我们依然在生命中期待着这一次次深谈之时的顿悟，以及一次次无所目地的放空旅行。",
//     "静默隐忍的时光，仿佛是生命的本质。在不肯苟合的世界里，这样的状态总让人无法自持。就像郁冬在《来自我心》里写的：“任凭这天空越来越湛蓝，你在我身边越来越平凡，可是有些说过的话，一直没能改变；任凭这旅程越来越孤单，你在我面前越来越茫然，丢不下的行李，是我不变的心。",
//     "每个人都不应该是别人生活里的装饰者，去体验这个世界的各种精彩，相遇不同的人，并记录下他们的美，表达出自己内心真实的感受，以证明他们来过我也来过。这似乎是我们当下最重要的事，不是么？",
//     "回头想想，能够让人回味的，好像只剩下在遥远的少年梦境里沁人心扉的呼喊。我相信，这呼喊有回声。",
// ];

// var lineIndex = 0;

var app = express();
// app.engine('html', expressHandlebars());
// app.set('view engine', 'html');
// app.set('views', __dirname);

app.get('/', function(req, res) {
    // var message = LINES[lineIndex];

    // lineIndex += 1;
    // if (lineIndex >= LINES.length) {
    //     lineIndex = 0;
    // }

    // res.render('index', {message: message});
    res.sendFile(__dirname+'/index.html');
});

// app.get('/static/js/main.js', function(req, res) {
//     res.sendFile(__dirname+'/static/js/main.js');
// });

// app.get('/favicon.ico', function(req, res) {
//     res.sendFile(__dirname+'/favicon.ico');
// });

// app.get('/static/css/main.css', function(req, res) {
//   res.sendFile(__dirname+'/static/css/main.css');
// });

// app.get('/static/css/ionicons.min.css', function(req, res) {
//   res.sendFile(__dirname+'/static/css/ionicons.min.css');
// });

// app.get('/static/fonts/ionicons.ttf', function(req, res) {
//   res.sendFile(__dirname+'/static/fonts/ionicons.ttf');
// });

http.Server(app).listen(PORT, function() {
    console.log("HTTP server listening on port %s", PORT);
});

fs.readdir('./',function(err,files){
    if(err) console.log('读取目录操作失败。');
    else console.log(files);
    console.log(process.cwd());
})
