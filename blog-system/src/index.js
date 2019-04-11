import Vue from 'vue/dist/vue'
import App from './app.vue'

// 引入路由
import router from "./router/router"    // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
import './assets/styles/global.scss';

require('./mock/mock');
require('./mock/topFiveArticles');
require('./mock/article');

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  router,  // 注入到根实例中
  render: h => h(App)
}).$mount(root);

Vue.filter('getYMD', function(input) {
  return input.split(' ')[0];
});
