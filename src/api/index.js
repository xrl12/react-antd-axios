import axios from 'axios'
import {getToken} from "../util"
import qs from 'qs'

class Axios {
	constructor () {
		// 初始化一个axios实例
		this.instance = axios.create({
			baseURL: 'http:localhost:3000'
		})

		// 添加请求拦截器
		this.instance.interceptors.request.use(function (config) {
			// 在发送请求之前做些什么
			config['headers']['token'] = getToken() ? getToken() : 'aaaaaaaa'
			console.log(config)
			return config;
		}, function (error) {
			console.log(error, '============')
			// 对请求错误做些什么
			return Promise.reject(error);
		});
	}

	get (url, params) {
		return this.instance.get(url, {params})
	}

	post (url, params) {
		return this.instance.post(url, qs.stringify(params))
	}
}

const axios_obj = new Axios()


export default axios_obj