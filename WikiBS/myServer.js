const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require("fs");

const publicDir = path.join(__dirname, "public");

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/bswikifan.html'));
});

app.get('/headerTemp', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/template/headerTemp.html'));
});

app.get('/footerTemp', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/template/footerTemp/footerTemp.html'));
});
app.get('/black-souls-about', (req, res) => {
    res.sendFile(path.join(__dirname, 'WikiBS/public/htmlHrefTitle/black-souls-about.html'));
});
app.get('/alice-about', (req, res) =>{
    res.sendFile(path.join(__dirname,'WikiBS/public/htmlHrefTitle/alica-about.html'));
});
app.get('/red-hood', (req,res) =>{
    res.sendFile(path.join(__dirname,'WikiBS/public/htmlHrefTitle/red-hood.html'));
});
app.get('/login-acount',(req,res)=>{
    res.sendFile(path.join(__dirname,'WikiBS/public/htmlHrefTitle/login-acount.html'));
});
app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});

