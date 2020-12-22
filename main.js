import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false //阻止启动生产消息
Vue.prototype.$store = store

//import '@/static/font/iconfont.css';
// import '@/static/font/iconfont.js'; //引入js，使用svg，可保持多色

import '@/common/less/index.less';
// import './common/less/index.css';

// import  './components/async-validator-uniapp'; //表单校验


// import  './js_sdk/vee-validate/validate.config';
// import zh_CN from './js_sdk/vee-validate/dist/locale/zh_CN';
// import VeeValidate, { Validator } from  './js_sdk/vee-validate';
// Validator.localize('zh_CN', zh_CN);//使用中文语言
// Vue.use(VeeValidate);



App.mpType = 'app'
// 导入组件

import {
	HttpWidget
} from '@/js_sdk/dt-request';

Vue.use(new HttpWidget());

// import proMethods from './common/professional.methods.js'


let gbv = {
	num: 0,
	app: null, //vue实例
}
Vue.prototype.gbv = gbv;
Vue.prototype.token = "";
// Vue.prototype.proMethods = proMethods;
Vue.prototype.lastRoute = ""; //跳转到登录页之前的路由
Vue.prototype.platform = ""; //当前环境 android ios

const app = new Vue({
	store,
	...App,
	data() {
		return {
			provider: []
		};
	},
	methods: {
	
		


	},
	onLaunch() {



	},


	onShow() {


	}

})
gbv.app = app;
app.$mount()
