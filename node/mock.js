var Mock = require('mockjs')







// var data = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|1-10': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1
//     }]
// })


var dataObj=temp({
    status:200,
    success:'success',
    count:8,
    img:12331231
})

var data = Mock.mock(dataObj)

// 输出结果
// console.log(JSON.stringify(data, null, 4))
console.log(JSON.stringify(data))


function temp(obj) {
    var content = 'content|' + obj.count ||'content|6'
    // var content = 'content|6'
    
        console.log(content)
    const dataObj = {
        'status': obj.status + '' || 200,
        'msg': obj.success + '' || '',
        'data': {
            'count': obj.count || 6,
            content: [{
                'url': obj.url + '' || '',
                'userId|+1': 1,
                'img': obj.img + '' || 'http://img.25pp.com/uploadfile/app/icon/20150825/1440491133300145.jpg',
                'title':obj.title +''||'帅哥美女圈',
            }]
        }
    }

    return dataObj

}