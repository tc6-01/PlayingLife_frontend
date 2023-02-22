// 上述请求也可以按以下方式完成（可选）

import axios from "axios";

// 创建axios自定义示例
const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
})
// 配置axios携带cookie
myAxios.defaults.withCredentials = true;
// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("发送请求")
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log( response.data,"MyAxios封装响应数据")
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log("参数发送错误")
    return Promise.reject(error);
});
export default myAxios;
