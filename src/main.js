import Vue from 'vue'
import VueAMap from "vue-amap";
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.use(VueAMap);

Vue.config.productionTip = false

//初始化vue-amap
VueAMap.initAMapApiLoader({
  key: '8ac727e588f0d51dc9a63a5227dfbd6c',
  //插件集合
  plugin: ['AMap.Autocomplete', 'AMap.CitySearch', 'MarkerClusterer', 'AMap.PlaceSearch', 'AMap.Geolocation'],
  // 默认高德 sdk 版本为 1.4.4
  uiVersion: '1.0.11',
  v: '1.4.4'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
