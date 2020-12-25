import apis from "./apis";
import Vue from 'vue'

let baseUrl;
// console.log("__dirname------------------");
// console.log(__dirname);
if (process.env.NODE_ENV === "development") {
	baseUrl = 'http://localhost:8080';
} else {
	baseUrl = 'http://localhost:8080';

}
Vue.prototype.baseUrl = baseUrl;
export default {
	// 接口主机地址
	baseUrl: baseUrl,

	// 模式，默认NAME。NAME：接口名模式；URI：相对地址模式
	mode: 'NAME',
	// mode: 'URI',

	// 接口配置
	apis,

	// 请求默认参数
	options: {
		header: {
			 'Content-Type': 'application/json',
			//'Content-type': 'application/x-www-form-urlencoded',

		},
	},

	// 拦截器
	interceptor: {
		// 请求拦截器，返回false可以阻止请求执行
		request: (options, api) => {
		 

			if (options.method === "GET") {
				options.data = options.data || {}
				options.data._version = Date.now();
				options.data.token = Vue.prototype.token;
				// options.data.token="3278683245487";
			}


			// console.log("options--------------------------------");
			// console.log(options);
			// options.from = 'uniapp';
			return true;
			// return false;
		},

		// 响应拦截器
		response: res => {
 

			if (res.data && res.data.error_code === "ERR-10004") {
				//保存当前页面的路由


				// #ifdef  H5
				Vue.prototype.lastRoute = Vue.prototype.gbv.app.$route.fullpath;
				// #endif

				// #ifdef  APP-PLUS
				let curPages = getCurrentPages();
				console.log(curPages)
				if (curPages.length && curPages[curPages.length - 1]) {
					let obj = curPages[curPages.length - 1];
					let arr = [];
					for (let prop in obj.options) {
						//参数不可以是路径
						if (prop.indexOf("/") === -1) {
							arr.push(prop + "=" + obj.options[prop]);
						}
					}
					let str = arr.length ? "?" + arr.join("&") : "";
					Vue.prototype.lastRoute = "/" + obj.route + str;
					console.log("curPages:", obj)
				}
				// console.log("Vue.prototype.lastRoute:", Vue.prototype.lastRoute)
				// console.log("curPages:", curPages[curPages.length - 1])



				// #endif

				//跳去登录页
				uni.redirectTo({
					url: "/pages/login/login"
				});
			}
			return res;
		}
	}
};
