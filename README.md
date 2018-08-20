<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>
<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
  <br>
</p>

<h2 align="center">A Plugin For Vue.js</h2>


#### 1.使用场景
<code>仅为移动端适配</code>
#### 2.引入方法
```
import Layer from 'v-layer'
Vue.use(Layer)
```
#### 3.使用模式
1.询问模式
<img style="width: 50%" src="http://oop28ndr0.bkt.clouddn.com/confirm-demo.png">
```
this.$confirm({
  title: '提示标题头',
  msg: '中间消息文案',
  sureTXT: '确认按钮文案',
  cancleTXT: '取消按钮文案'
}).then((res) => {
  console.info('点击确定按钮')
})
}).catch((err) => {
  console.info('点击取消按钮')
})
```

2.提示模式
<img style="width: 50%" src="http://oop28ndr0.bkt.clouddn.com/alert.png">
```
this.$alert({
  title: '提示标题头',
  msg: '中间消息文案',
  sureTXT: '确认按钮文案'
}).then((res) => {
  console.info('点击确定按钮')
})
}).catch((err) => {
  console.info('点击取消按钮')
})
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, Yejunnan (Liu) You
