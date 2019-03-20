# y

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



手机调试:
处于同一网络环境中,
2 打开pack.json 文件,在dev 脚本中添加一个 --host 指令把当前 wifi ip 地址,
设置为 --host ip  
3 cmd 里运行 ipconfig 命令 查看无线局域网 ip 
4 在手机浏览器 打开 设置的地地 调节


5 element ui 引入 注意配置babel e2015插件 不然报错 couldn`t find preset 'es2015'relative to directory
