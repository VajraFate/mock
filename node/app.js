'use strict'
// require("babel-core").transform("code", options);
const express = require('express')

const path = require('path')
const xtpl = require('xtpl')
const fs = require('fs')
const router = express.Router();
const bodyParser = require('body-parser')
let Mock = require('mockjs')

require('babel-register');
require('./app.js')



let app = express()






// 设置bodyParser中间件,用于解析上传数据的 参数
app.use(bodyParser())


// 解决跨域问题 
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})


let indexRouter = require(path.join(__dirname, '/Router/indexRouter.js'))

// let index = require(path.join(__dirname,'/index.json'))
// app.use('/', '../footer.html')
app.use('/index', indexRouter)

app.listen('9000', err => {
    if (err) {
        console.log(err)
    }
    console.log('开启成功')
})