'use strict';

const express = require('express');
let router = express.Router();
const fs = require('fs')
const path = require('path')
const Mock = require('mockjs')


router.get('/hotQuanzi', (req, res) => {
    fs.readFile(path.join(__dirname + '/../json/index.json'), (err, data) => {
        // res.json(data)
        if (err) {
            console.log(err)
        }

        res.end(data)
    })
})



// function temp(obj) {
//     var content ='content|'+obj.content 
//     const dataObj = {
//         'status': obj.status || 200,
//         'msg': obj.success || '',
//         'data': {
//             'count': obj.count || 6,
//             'content|6': [{
//                 'url': '',
//                 'userId|+1': 1,
//                 'img': 'http://img.25pp.com/uploadfile/app/icon/20150825/1440491133300145.jpg',
//                 'title': '帅哥美女圈',
//             }]
//         }
//     }

// }



router.get('/quanziTuijian', (req, res) => {
    let data = Mock.mock({
        'status': 200,
        'msg': 'success',
        'data': {
            'count': 6,
            'content|6': [{
                'url': '',
                'userId|+1': 1,
                'img': 'https://img10.360buyimg.com/cms/jfs/t4747/341/2410783745/20551/5d2b61cc/58fefbadN36124aa9.jpg',
                'title': '帅哥美女圈',
            }]
        }
    })
    // console.log(data)

    // res.writeHead(200, {"Content-Type": "application/json"}); 
    res.end(JSON.stringify(data))
})


router.get('/remenHuati', (req, res) => {
    let data = Mock.mock({
        'status': 200,
        'msg': 'success',
        'data': {
            'count': 4,
            'content|4': [{
                'url': '',
                'headUrl': '',
                'userId|+1': 1,
                'userName': '得几胡掉',
                'BGimg': 'http://img.25pp.com/uploadfile/app/icon/20150825/1440491133300145.jpg',
                'title': '帅哥美女圈',
                'headImg': 'https://img10.360buyimg.com/cms/jfs/t4747/341/2410783745/20551/5d2b61cc/58fefbadN36124aa9.jpg',
                'goods|1-88888': 6666,
                'comment|1-99999': 1
            }]
        }
    })
    // console.log(data)

    // res.writeHead(200, {"Content-Type": "application/json"}); 
    res.end(JSON.stringify(data))
})






router.get('/yangshi1', (req, res) => {
    let data = Mock.mock({
        'status': 200,
        'msg': 'success',
        'data': {
            'count': 6,
            'goodList|3': [{
                'title': '列表商品',
                'url': '',
            }],
            'goodNo1': {
                'goods|1-9999': 1,
                'img': 'https://img10.360buyimg.com/cms/jfs/t4747/341/2410783745/20551/5d2b61cc/58fefbadN36124aa9.jpg',
                'url': '',
            },
            'goodNo2|5': [{
                'goods|1-9999': 1,
                'img': 'https://img10.360buyimg.com/cms/jfs/t4747/341/2410783745/20551/5d2b61cc/58fefbadN36124aa9.jpg',
                'url': '',
            }],
            'goodNo3': {
                'goods|1-9999': 1,
                'img': 'https://img10.360buyimg.com/cms/jfs/t4747/341/2410783745/20551/5d2b61cc/58fefbadN36124aa9.jpg',
                'url': '',
                'goodName': '商品名称123',
                'goodsMessage': '商品的简介..........',
                'goodPrice|1-9999': 1,
                'JDprice|1-999': 1
            },
            'goodNo4': {
                'goods|1-9999': 1,
                'img': 'https://img10.360buyimg.com/cms/jfs/t4747/341/2410783745/20551/5d2b61cc/58fefbadN36124aa9.jpg',
                'url': '',
                'goodName': '商品名称123',
                'goodsMessage': '商品的简介............',
                'goodPrice|1-9999': 1,
                'JDprice|1-999': 1
            },

            'goodNo5|3': [{
                'url': '',
                'userId|+1': 1,
                'img': 'https://img10.360buyimg.com/cms/jfs/t4747/341/2410783745/20551/5d2b61cc/58fefbadN36124aa9.jpg',
                'title': '帅哥美女圈',
                'goods|1-9999': 1,
                'goodName': '商品名称123',
                'goodsMessage': '商品的简介...........',
                'goodPrice|1-9999': 1,
                'JDprice|1-999': 1
            }]
        }
    })
    // console.log(data)

    // res.writeHead(200, {"Content-Type": "application/json"}); 
    res.end(JSON.stringify(data))
})



router.get('/zhinengchuxing', (req, res) => {
    var data = Mock.mock({
        'status': 200,
        'msg': 'success',
        'data': {
            'count': 3,
            'imgNo1|2': [{
                'url': '',
                'userId|+1': 1,
                'img': 'http://b-ssl.duitang.com/uploads/item/201511/24/20151124200706_XaTyS.jpeg',
            }],
            'imgNo2|3': [{
                'url': '',
                'userId|+1': 1,
                'goodName': '帅哥美女圈',
                'commit|10': '',
                'img': 'http://img.25pp.com/uploadfile/app/icon/20150825/1440491133300145.jpg',
                'price|1-88888': 6666,

            }],
            'imgNo3|4': [{
                'url': '',
                'userId|+1': 1,
                'goodName': '帅哥美女圈',
                'img': 'http://img.25pp.com/uploadfile/app/icon/20150825/1440491133300145.jpg',
                'price|1-88888': 6666,

            }],
            'imgNo4': {
                'img': 'http://b-ssl.duitang.com/uploads/item/201511/24/20151124200706_XaTyS.jpeg',
                'url': '',
                'userId|+1': 1,
            }

        }
    })
    res.end(JSON.stringify(data))
})


router.get('/indexSwiper',(req,res)=>{
    var data= Mock.mock({
        
    })


})

module.exports = router;