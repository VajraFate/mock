# mock
node + mock 数据
### 1.使用node作为后台
+ 应用router路由跳转不同页面的请求
+ mock.js制作各种假数据
+或者读取不同 json文件

### 2.babel 6 转es5
+ 需要使用babel6 需要安装babel-core或者babel-cli
+ 需要babel添加插件babel-preset-es2015
+ 在app.js中加入 require('babel-core/register') 

### 3.mock使用
+ 通过模板引擎返回对应数据



# 使用:
+ npm init
+ 在Router文件下见面的各控制器中 使用express().get('/对应请求'),使用mock模板 编写假数据
+ 打开node控制台 输入 $node app.js  开启服务
+ 在浏览器发送请求 返回数据进行处理
+ Done
> 也可以直接使用 mock截取请求,无需建立node后台

