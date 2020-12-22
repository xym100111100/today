/**
 * http request widget
 *
 * request options:
 * {
 *   name: api id,
 *   url: request url,
 *   data: request data,
 *   method: request method,
 *   header: request header,
 *   params: params set for uri,
 *   dataType: request data type,
 *   responseType: response type,
 * }
 */
import pathToRegexp from "path-to-regexp";

import config from "./config";


const MODE_NAME = 'NAME';
// const MODE_URI = 'URI';

// 请求任务
let task = null;

function Http() {
	const {
		baseUrl,
		mode,
		apis,
		interceptor,
		options
	} = config;

	this.baseUrl = baseUrl;
	this.mode = mode || MODE_NAME;
	this.apis = apis || [];
	this.interceptor = interceptor || {
		request: null,
		response: null
	};
	this.options = Object.assign({}, {
			data: {},
			header: {},
			method: "GET",
			dataType: "json",
			responseType: "text",
			success() {},
			fail() {},
			complete() {}
		},
		options
	);
}

// 中断请求
Http.prototype.abort = function() {
	if (task) {
		task.abort();
	}
}

Http.prototype.request = function(options) {
	let api = null;
	let baseUrl = typeof options.baseUrl === "string" ? options.baseUrl : this.baseUrl;
	if (this.mode === MODE_NAME) {
		api = getApi(this.apis, options.name, options.params);
		if (api !== null) {
			delete options.name;
			delete options.params;
			options.url = baseUrl + api.uri;
		}
	}

	if (!isFullUrl(options.url)) {
		options.url = baseUrl + options.url;
	}

	const self = this;
	return new Promise((resolve, reject) => {
		options.complete = (response) => {

			const {
				statusCode,
				msg
			} = response;

			let newResponse = response;
			if (typeof self.interceptor.response === "function") {
				newResponse = self.interceptor.response(newResponse);
			}
			if (statusCode == 401) {
				uni.showModal({
					title: '提示',
					content: '登录过期，请重新登录',
					success: function(res) {
						if (res.confirm) {
							uni.reLaunch({
								url: '/pages/login/login'
							})
						} else if (res.cancel) {

						}
					}
				});

			} else if (statusCode == 500) {

				uni.showToast({
					title: msg ? msg : '服务器出错',
					duration: 1000
				});
				reject(newResponse);

			} else if (statusCode == 200) {
				resolve(newResponse.data);

			}
			
			uni.showToast({
				title:msg ? msg :"请求出错",
				duration: 1000
			});
		    console.log(newResponse)
			reject(newResponse);
		};

		const newOptions = Object.assign({}, self.options, options);

		if (typeof self.interceptor.request === "function") {
			if (self.interceptor.request(newOptions, api) === false) {
				reject(new Error("Unauthorized request"));
			}
		}

		task = uni.request(newOptions);
	});
};

['head', 'options', 'delete'].forEach((method) => {
	Http.prototype[method] = function(name, params) {
		let options = {};

		if (typeof name === "object") {
			options = name;
			return this.request(
				Object.assign(options, {
					method: method.toUpperCase(),
				})
			);
		}

		options.method = method.toUpperCase();
		if (this.mode === MODE_NAME) {
			options.name = name;
			options.params = params;

			return this.request(options);
		}

		options.url = name;
		if (typeof params === 'object') {
			options = Object.assign({}, options, params);
		}

		return this.request(options);
	};
});

['get', 'post', 'put', 'patch'].forEach((method) => {
	Http.prototype[method] = function(name, data, params) {
		let options = {};

		if (typeof name === "object") {
			options = name;
			return this.request(
				Object.assign(options, {
					method: method.toUpperCase(),
				})
			);
		}

		options.method = method.toUpperCase();
		if (this.mode === MODE_NAME) {
			options.name = name;
			options.data = data;
			options.params = params;
			return this.request(options);
		}

		options.url = name;
		options.data = data;
		if (typeof params === 'object') {
			options = Object.assign({}, options, params);
		}

		return this.request(options);
	};
});

/**
 * http widget class
 */
export class HttpWidget {
	install(Vue) {
		Vue.prototype.$http = new Http();
	}
}

export {
	Http,
};

/**
 * Get api object by name. URI will be replaced by data and params
 * @param  {String} name    Api name
 * @param  {Object} params  Request params
 * @return {Object}
 */
function getApi(apis, name, params) {

	if (apis.length <= 0 || !name) {
		return null;
	}
	// let api = apis[name];
	let _api = apis[name];
	let api = { ..._api
	}; //必须拷贝一份，否则第一次请求的参数会变成缓存，影响接下去的请求
	let uri = api.uri;

	let keys = [];

	pathToRegexp(uri, keys);


	if (keys.length > 0) {
		keys.forEach(key => {
			if (!params[key.name]) {
				throw new Error(
					`API name: ${name}. You are using dynamic params but ${
                        key.name
                    } not existed in your params`
				);
			}
			uri = uri.replace(`:${key.name}`, params[key.name] || "undefined");
		});
	}

	return Object.assign(api, {
		uri,
	});
}

function isFullUrl(url) {
	return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);
}
