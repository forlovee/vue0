// 入口文件
import Vue from 'vue'

import app from './App.vue'


// 引入mint-ui
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintUi)

// 引入mui
import './lib/mui/css/mui.min.css'





var vm = new Vue({
    el: '#app',
    render: c => c(app)
})