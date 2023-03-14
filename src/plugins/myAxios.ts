import axios, {AxiosInstance} from "axios";
import {useRouter} from "vue-router";
import {Toast} from "vant";
const isDev = process.env.NODE_ENV === 'development';

const myAxios: AxiosInstance = axios.create({
    baseURL: isDev ? 'http://localhost:8080/api' : 'https://backend.beeran.asia/api',
});
myAxios.defaults.withCredentials = true; // 配置为true
const router = useRouter();
// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    console.log('我要发请求啦', config)

    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
myAxios.interceptors.response.use(function (response) {
    console.log('我收到你的响应啦', response)
    if (response?.data?.code === 40100) {
        Toast.loading('请登录以查看更多内容');
    }
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default myAxios;
